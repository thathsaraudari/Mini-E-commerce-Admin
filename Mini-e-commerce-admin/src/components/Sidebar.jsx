import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
            <div>
                <Link to="/">
                <button><h3>HOME </h3></button>
                </Link>   
            </div>

            <div>
                <Link to="/about">
                <button><h3>ABOUT </h3></button>
                </Link>  
            </div>                 
    
            <div>
                 <Link to="/profile">
                <button><h3>PROFILE</h3></button>
                </Link>
            </div>
               
        </>
    )
}

export default Sidebar;