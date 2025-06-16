import logo from "../assets/logo1.png"
import '../App.css'

function Navbar() {
    return (

        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="brand-name">ELLE</h1>
            </div>
        </nav>
    )
}

export default Navbar;