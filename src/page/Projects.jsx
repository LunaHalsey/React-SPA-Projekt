// Projects.jsx länkar till tidigare utförda projekt

// SCSS
import "../scss/projects.scss";

// Importerar komponenten som skapar länkarna på denna sida
import { FetchAPI } from '../components/FetchAPI';

function Projects() {

    return (
        <div className="row">
            <div className="col-2"></div>

            <div className="col-8">

            <h1>Mina Projekt🎉</h1>

            {/* FetchAPI komponenten visas här */}
            <FetchAPI />

            </div>


        </div>
    );
}

// Exporterar sidan
export default Projects

