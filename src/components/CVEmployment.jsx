// CVEmployment.jsx Tabell funktionen som skapar tabell över tidigare jobb.

// React
import React from "react";

// SCSS
import "../scss/cv.scss";

// Importerar jobbdatan
import EmploymentData from "../data/EmploymentData";

function CVEmployment() {

    return (
        // Tabellen som renderas
        <div className="table-div">
        <table className="cv-table">
            <thead>
                <tr>
                    <th>Arbetsplats</th>
                    <th>Position</th>
                    <th>Start</th>
                    <th>Slut</th>
                </tr>
            </thead>

            <tbody>
                {/* Går igenom och skriver ut datan i tabellen */}
                {EmploymentData.map((val,i) => (
                    <tr key={i}>
                        <td>{val.worknLocation}</td>
                        <td>{val.task}</td>
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
export default CVEmployment