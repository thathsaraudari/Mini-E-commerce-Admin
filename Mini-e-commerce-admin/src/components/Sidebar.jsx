import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <Link to="/">
                <button><h3>HOME</h3></button>
                </Link>   
            </div>

            <div className="sidebar" >
                <Link to="/about">
                <button><h3>ABOUT</h3></button>
                </Link>  
            </div>                 
    
            <div className="sidebar">
                 <Link to="/profile">
                <button><h3>PROFILE</h3></button>
                </Link>
            </div>
               
        </>
    )
}

export default Sidebar;