// CVEducation.jsx Tabell funktionen som skapar tabell över tidigare utbildningar.

// React
import React from "react";

// SCSS
import "../scss/cv.scss";

// Importerar utbildningsdatan
import EducationData from "../data/EducationData";

function CVEducation() {

    return (
        // Tabellen som renderas
        <div className="table-div">
        <table className="cv-table">
            <thead>
                <tr>
                    <th>Skola</th>
                    <th>Program</th>
                    <th>Start</th>
                    <th>Slut</th>
                </tr>
            </thead>

            <tbody>
                {/* Går igenom och skriver ut datan i tabell */}
                {EducationData.map((val, i) => (
                        <tr key={i}>
                            <td>{val.schoolnLocation}</td>
                            <td>{val.study}</td>
                            <td>{val.start}</td>
                            <td>{val.end}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    );
}

// Exporterat komponenten
export default CVEducation