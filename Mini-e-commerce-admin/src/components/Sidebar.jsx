import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <Link to="/">
                <button><h3>HOME</h3></button>
                </Link>   

                <Link to="/about">
                <button><h3>ABOUT</h3></button>
                </Link>  
            </div>                    
              
        </>
    )
}

export default Sidebar;