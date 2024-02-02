// Header.jsx skapar sidhuvudet

// React
import React from "react";

// SCSS
import "../scss/header.scss";

// Importerar navigationsmenynkomponenten
import Navbar from "./Navbar";



function Header() {
    return (
        <div>
            <header className="header">
            <nav className="main-nav">
                <div className="row">
                    <div>
                    {/* Renderar navigationsmenyn */}
                    <Navbar />
                    </div>


                    </div>
            </nav>

            </header>
        </div>

    );
}



// Exporterar komponenten
export default Header;