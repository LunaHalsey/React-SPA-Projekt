// Footer.jsx komponenten för sidfoten

// React
import React from "react";

// SCSS
import "../scss/footer.scss";

// Komponent för att visa nuvarande år i sidfoten
import GetCurrentYear from "./CurrentYear";

// Komponent nattläges-funktion
import NightMode from "./NightMode";

function Footer () {

    return (

        <footer className="row footer-color">

            <div className="col-4">

                <div className="">
                    {/* Renderar årtalet */}
                    <p>© <GetCurrentYear /> Webbplats</p>
                </div>
            </div>

            <div className="col-4 footer-center">
                {/* Renderar knappen för nattläget */}
                <NightMode />
            </div>

            <div className="col-4">

                <h4 className="footer-center">Kontakt</h4>
                <ul>
                    <li className="footer-text">Tel: 2165481</li>
                    <li className="footer-text">E-post: epost@epost.se</li>
                </ul>
            </div>



        </footer>

    );
}

// Exporterar komponenten
export default Footer;