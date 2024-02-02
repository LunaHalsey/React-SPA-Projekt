// Navbar.jsx Skapar navigationsmenyn med färglägesknapp

// React router
import { Link } from "react-router-dom";

// Importerar nattlägeskomponenten
import NightMode from "./NightMode";

// Navbar
function Navbar() {

    return (
        <div>
            {/* Navbar */}
                {/* Hamburgermenyn */}
                    <input type="checkbox" className="menu-btn" id="menuBtn" />
                    <label htmlFor="menuBtn" className="menu-icon"><span className="nav-icon"></span></label>


            {/* Navigationsmenyn */}
            <ul className="menu">
                <li className="menu-li"><Link to="/" className="navLink">Hem </Link>
                </li>
                <li className="menu-li"><Link to="/aboutme" className="navLink">Om mig </Link>
                </li>
                <li className="menu-li"><Link to="/cv" className="navLink">CV </Link>
                </li>
                <li className="menu-li"><Link to="/contact" className="navLink">Kontakt </Link>
                </li>
                <li className="menu-li"><Link to="/projects" className="navLink">Projekt </Link>
                </li>
                <li className="button"><a className="button-a">
                    {/* Renderar nattlägeskomponenten */}
                <NightMode /></a>
                </li>
            </ul>

        </div>

    );
}




export default Navbar;