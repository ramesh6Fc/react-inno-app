import { Link } from 'react-router-dom';


const Navelement1 = ({setDev}) =>{
    return(
    <Link to ='/'>
        <div className = 'navigation-title field-navigationtitle' onClick={() => setDev (false)}>
            LATEST ARTICLES
        </div>
    </Link>
    )
}
export default Navelement1