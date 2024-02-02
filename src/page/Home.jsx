// Home.jsx Är hem/startsidan på webbplatsen
import React from "react";

// Importerar scss för sidan
import "../scss/home.scss";
import "../scss/style.scss";

// Router används till länk-funktionen på denna sida
import { Link } from "react-router-dom";

// Startsida/förstasida
function Home() {
    return (

        <div>
            <div className="row">
                <h1 className="home-h1">Min sida</h1>
                <div className="col-2"></div>

                <article className="col-8 home-text">
                    <h2>Om mig</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum illo dicta nobis delectus quia ea voluptatibus, accusamus fugiat quam magni voluptas repudiandae? Iusto neque in voluptatibus excepturi qui inventore.</p>

                    {/* Router länk-funktionen */}
                    <Link to="/aboutme" className="navLink page-link">Om mig </Link>
                </article>
            </div>

            <div className="row">
                <div className="col-2"></div>

                <article className="col-8 home-text">
                    <h2>CV</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum illo dicta nobis delectus quia ea voluptatibus, accusamus fugiat quam magni voluptas repudiandae? Iusto neque in voluptatibus excepturi qui inventore.</p>

                    {/* Router länk-funktionen */}
                    <Link to="/cv" className="navLink page-link">CV </Link>
                </article>
            </div>

            <div className="row">
                <div className="col-2"></div>

                <article className="col-8 home-text">
                    <h2>Kontakt</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum illo dicta nobis delectus quia ea voluptatibus, accusamus fugiat quam magni voluptas repudiandae? Iusto neque in voluptatibus excepturi qui inventore.</p>

                    {/* Router länk-funktionen */}
                    <Link to="/contact" className="navLink page-link">Kontakt </Link>
                </article>
            </div>

            <div className="row">
                <div className="col-2"></div>

                <article className="col-8 home-text">
                    <h2>Projekt</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum illo dicta nobis delectus quia ea voluptatibus, accusamus fugiat quam magni voluptas repudiandae? Iusto neque in voluptatibus excepturi qui inventore.</p>
                    
                    {/* Router länk-funktionen */}
                    <Link to="/project" className="navLink page-link">Projekt </Link>
                </article>
            </div>



        </div>

    );
}

// exporterar komponenten
export default Home