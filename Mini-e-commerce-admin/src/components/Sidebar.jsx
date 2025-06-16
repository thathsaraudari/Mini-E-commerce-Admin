

function Sidebar() {
    return (
        <>
            <div>
                <Link to="/">
                <button><h3>HOME</h3></button>
                </Link>                    
            </div>

            <div>
                <Link to="/About">
                <button><h3>ABOUT</h3></button>
                </Link>                    
            </div>
        </>
    )
}

export default Sidebar;