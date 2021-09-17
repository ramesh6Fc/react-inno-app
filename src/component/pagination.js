
const Pagination = ({countPerPage, totalContent, paginate, setCountPerPage, currentPage}) =>{

    const pageNumber = [];
    const page = [5,10,20,50]
    const pagination = (option) => {
        if(currentPage < totalContent/countPerPage && option && option === 'next') {
            paginate(currentPage + 1)
        }else if(currentPage >1 && option && option === 'prev'){
            paginate(currentPage - 1)
        }
    }

    for (let i= 1; i <= Math.ceil(totalContent/countPerPage); i++){
        pageNumber.push(i);
    }
    return(
        <div>
            <nav>
                <ul className='pagination float-right'>
                    <li className='page-item'>
                        
                      
                         <select style={{ margin:'5px'}} value = {countPerPage} onChange={event => event.target.value ? setCountPerPage(event.target.value) :""}>            
                        { page.map(numb =>(
                            <option key = {numb}>{numb}</option>
                         ))}
                        </select>   
                         <span  style={{ marginRight:'10px'}}>/Page:  </span>
                    </li>
                    <li>
                        <a href="#/" aria-label="Previous">
                            <span aria-hidden="true" 
                            style ={{fontSize:'large',marginRight:'10px'}}
                            onClick = {()=> pagination('prev')}
                            >&laquo;</span>
                        </a>
                    </li>
                    <li className='page-item'>
                        <select style={{ margin:'5px'}} value = {currentPage} onChange={event => event.target.value ? paginate(event.target.value) :""}>            
                       { pageNumber.map(num =>(
                           <option key = {num }>{num}</option>
                        ))}
                       </select>   
                   </li> 

                    <li lassName='page-item' >
                        <a href="#/" aria-label="Next">
                            <span aria-hidden="true" 
                            style ={{fontSize:'large',marginLeft:'10px'}}
                            onClick = {()=> pagination('next')}
                            >&raquo;</span>
                        </a>
                    </li>
                   
                    {/* {
                        pageNumber.map(num =>(
                            <li className='page-item' key={num}>
                                <a href='#' className='page-link' onClick={()=> paginate(num)}>{num}</a>
                            </li>
                        ))
                    } */}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;