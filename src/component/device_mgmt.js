import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './pagination';
import datas from '../data/dev_data.json';

 function Devmgmt ({setDevMgmt, checkedData}){
    //  const [content, setContent] = useState([]);
    //  const [loading, setLoading] = useState(false);
     const [currentPage, setCurrentPage] = useState(1);
     const [countPerPage, setCountPerPage] = useState(10);
     setDevMgmt(true);
     const toggle = (item) => {
         console.log(checkedData,"checkedData")
        if(checkedData.indexOf (item.imei) === -1){
            checkedData.push(item.imei)
        }else{
            let indx = checkedData.indexOf(item.imei);
            checkedData.splice(indx,1);
        }
     }
    
     const indexOfLastContent = currentPage * countPerPage;
     const indexOfFistPost = indexOfLastContent - countPerPage;
     const currentContents = datas.slice(indexOfFistPost,indexOfLastContent);

     const paginate = (pageNumber) => {
         setCurrentPage(pageNumber);
     }
     const color = {
         New: 'blue',
         Active: 'green',
         Suspend: 'orange',
         Deactive: "red",
         Assigned: "green",
         Unassigned: "Orange",
         Damaged:'red'
     }
     function toDate(date) {
        if (date === void 0) {
          return new Date(0);
        }
        if (isDate(date)) {
          return date;
        } else {
          return new Date(parseFloat(date.toString()));
        }
      }
      
      function isDate(date) {
        return (date instanceof Date);
      }
       
     const format = (date, format) => {
        let d = toDate(date);
        return format
          .replace(/Y/gm, d.getFullYear().toString())
          .replace(/m/gm, ('0' + (d.getMonth() + 1)).substr(-2))
          .replace(/d/gm, ('0' + (d.getDate() + 1)).substr(-2))
          .replace(/H/gm, ('0' + (d.getHours() + 0)).substr(-2))
          .replace(/i/gm, ('0' + (d.getMinutes() + 0)).substr(-2))
          .replace(/s/gm, ('0' + (d.getSeconds() + 0)).substr(-2))
          .replace(/v/gm, ('0000' + (d.getMilliseconds() % 1000)).substr(-3));
      }
      const dateFormat = "Y-m-d H:i:s";

    return (
        <div style={{marginTop :'80px', minHeight:'435px'}}>
            <Table striped bordered hover>
                    <thead >
                        <tr>
                            <th>&#10003;</th>
                            <th>IMEI</th>
                            <th>Device Status</th>
                            <th>SIM No</th>
                            <th>Adhar No</th>
                            <th>Contact No</th>
                            <th>Status</th>
                            <th>Created Time</th>
                            <th>Updated Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas && !datas.length &&
                            <tr>
                                <td colSpan="6">
                                    <div data-testid="loading">No data are available.</div>
                                </td>
                            </tr>
                        }
                        {
                            currentContents && currentContents.map(items => {
                                return (
                                    <tr key={items}>
                                        <td><input type="checkbox"
                                        onClick={() => toggle(items)}                                       
                                        ></input></td>
                                        <td>{items.imei}</td>
                                        <td style={{ color:color[items.isActive]}}>{items.isActive}</td>
                                        <td>{items.imsi}</td>
                                        <td>{items.Adhar}</td>
                                        <td>{items.phone}</td>
                                        <td style={{ color:color[items.status]}}>{items.status}</td>
                                        <td>{items.registered  ? format(items.registered, dateFormat):""}</td>
                                        <td>{items.updated ? format(items.updated, dateFormat):""}</td>
                                                                               
                                    </tr>
                                ) 
                            })
                        }
                    </tbody>
                </Table>
                <Pagination countPerPage={countPerPage} totalContent =  {datas.length} paginate = {paginate} setCountPerPage = {setCountPerPage} currentPage = {currentPage}/>
        </div>
                
    )
 }
     
 export default Devmgmt