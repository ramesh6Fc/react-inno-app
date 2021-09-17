import { Link } from 'react-router-dom';
// import Navelement1 from './navelement1';
// import Navelement2 from './navelement2';
import Devsimmgmt from './devicemgmtlink';
import TakeAction from './takeaction';

const Header = ({devMgmt, setDevMgmt, checkedData, logout}) => {
   const setDev = (bool) =>{
        setDevMgmt(bool)
   }
  
    return (
        <div className = 'fixed-top'>
        <div className='container-fluid' style={{background: '#252525', padding:'10px',borderBottom: '2px solid #87a72d'}}>
            <div style={{margin:'12px 30px 0px 50px',fontSize:'14px',fontWeight:400}}>
            <div className = 'row'>
                 <div className = 'col-lg-2'>
                    <img src = 'https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Innovation-Org/abc-logo.svg' alt = '' style={{margin: '0px 0px', textAlign:'left', height:'40px', width:'auto'}}></img>
                 </div>
                 <div className = 'col-lg-5' >
                    <div >
                        <div className = 'navigation-main-horizontal'>
                        <nav>
                            <ul className = 'd-flex align-items-start nav_item' style = {{ 'list-style':'none'}}> 
                                <li className='item1'>
                                    <Link to ='/'>
                                        <div className = 'navigation-title field-navigationtitle' onClick={() => setDev (false)}>
                                            LATEST ARTICLES
                                        </div>
                                    </Link>
                                </li>
                                <li className='item2'>
                                    <Link to = '/devmgmt'>
                                        <div className = 'navigation-title field-navigationtitle'  onClick={() => setDev (true)}>
                                            DEVICES
                                        </div>
                                    </Link>                                   
                                </li>
                                <li className='item3'>
                                    <a href ='/#'>
                                        <div className = 'navigation-title field-navigationtitle'>
                                            ABOUT US
                                        </div>
                                    </a>
                                </li>
                                <li className='item4'>                                    
                                    <a href = '/#'>
                                        <div className = 'navigation-title field-navigationtitle'>
                                            SEARCH
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        
                   </div>
                   </div>
                 </div>
                 <div className = "col-lg-5" style={{display:'inline-flex'}}>
                        {
                        devMgmt ? <Devsimmgmt checkedData={checkedData}/> :  <TakeAction />                
                        
                        }                          
                    <a href='/#' style= {{color:'yellow', marginTop:'6px', fontSize:'large'}}
                    onClick={logout} 
                    >
                        <i className="fa fa-sign-out signout" style= {{color:'#ee622e'}} aria-hidden="true">
                            <div className="tooltiptext btn">Sign-out</div>
                        </i>
                    </a>           
                    
                 </div>
             </div>
                   
            </div>
       </div>

        </div>



    )

}

export default Header