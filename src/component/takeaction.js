
const TakeAction = () =>{
    return (
        <div className = 'container-fluid'>
            <ul className = 'd-flex justify-content-around align-middle' style = {{ 'list-style':'none'}}>
                <li className = 'email social-link  social-net'>
                <a href = '/#' >
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        &nbsp;STAY AHEAD
                    </a>
                </li>
                <li className = 'social-link  social-net'>
                <a href = '/#' ><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                <a href = '/#' ><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                <a href = '/#' ><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                </li>
                <li className = 'takeaction social-link'>
                    <a href = '/#' ><i className="fa fa-search" aria-hidden="true"></i> </a>
                    <a href = '/#' className='btn bg-green text-black' style={{fontSize:'13px'}}>
                        TAKE ACTION
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default TakeAction