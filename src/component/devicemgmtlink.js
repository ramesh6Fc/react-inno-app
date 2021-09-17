import { DropdownButton, Dropdown } from 'react-bootstrap'
import Services from '../services/service'


const Devsimmgmt = ({checkedData}) =>{
    const action = (act) =>{
        Services.PutDevDetails(checkedData, act)
    }
    return (
    <div className = 'container-fluid'>
        <div className ='row'>
            <div className = 'col-lg-1'> </div>
            <div className = 'col-lg-11'> 
            
            
                <ul className = 'd-flex justify-content-around align-right' style = {{ 'list-style':'none'}}>
                
                    <li className = 'takeaction social-link'>
                            {/* <a href = '/#' 
                            className='btn bg-green text-black '
                            style={{fontSize:'13px'}}>
                                DEVICE ACTIONS
                            </a > */}

                            <DropdownButton id="dropdown-basic-button" 
                            style={{fontSize:'13px'}} 
                            title="DEVICE ACTIONS"
                            >
                                <Dropdown.Item onClick={() => action('assign')}>Assign</Dropdown.Item>
                                <Dropdown.Item href="/devmgmt" onClick={() => action('Unassign')}>Unassign</Dropdown.Item>
                                <Dropdown.Item href="/devmgmt" onClick={() => action('Damage')}>Damage</Dropdown.Item>
                            </DropdownButton>
                            
                    </li>
                    <li className = 'takeaction social-link'>
                        
                        {/* <a href = '/#' className='btn bg-green text-black' style={{fontSize:'13px'}}>
                            SIM ACTIONS
                        </a> */}
                        <DropdownButton id="dropdown-sim-action" 
                            style={{fontSize:'13px'}} 
                            title="SIM ACTIONS"
                            >
                                <Dropdown.Item href="/devmgmt" onClick={() => action('Activate')}>Activate</Dropdown.Item>
                                <Dropdown.Item href="/devmgmt" onClick={() => action('Suspend')}>Suspend</Dropdown.Item>
                                <Dropdown.Item href="/devmgmt" onClick={() => action('Deactivate')}>Deactivate</Dropdown.Item>
                            </DropdownButton>
                    </li>
                    <li>
                            
                            {/* <a href = '/#'> 
                                <div className = 'navigation-title field-navigationtitle'>
                                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                                </div>
                            </a> */}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Devsimmgmt