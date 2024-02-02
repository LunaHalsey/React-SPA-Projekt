// CV.jsx sidan som visar CV i form av tabeller.

// React
import React from "react";

// SCSS
import "../scss/cv.scss";

// Importerar komponenten som skapar tabellen för tidigare utbildningar
import CVEducation from "../components/CVEducation";

// Importerar komponenten som skapar tabellen för tidigare arbete
import CVEmployment from "../components/CVEmployment";


function CV() {
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <article className="col-8">
                    <h1>CV</h1>
                    <h2>Utbildning</h2>

                    {/* Skapar utbildningstabellen på sidan */}
                    <CVEducation />

                    <h2>Jobberfarenhet</h2>

                    {/* Skapar arbetestabellen på sidan */}
                    <CVEmployment />
                </article>
            </div>
        </div>
    );
}

// Exporterar komponenten
export default CV