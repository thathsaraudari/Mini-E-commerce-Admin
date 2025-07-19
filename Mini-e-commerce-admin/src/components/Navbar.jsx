import logo from "../assets/logo2.png"
import '../App.css'


function Navbar() {
    return (
        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />

                <h1 className="brand-name">T&N MARKET</h1>
            </div>
        </nav>
    )
}

export default Navbar;