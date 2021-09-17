import { Link } from 'react-router-dom';

const Navelement2 = ({setDev}) =>{
        return 
        (
            <Link to = '/devmgmt'>
                <div className = 'navigation-title field-navigationtitle'  onClick={() => setDev (true)}>
                    DEVICES
                </div>
            </Link>
        );
    
}
export default Navelement2