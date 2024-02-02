// AboutMe.jsx "Om mig"-sidan

// Importerar scss som används på sidan
import "../scss/aboutme.scss";

// Är innehållet som används och visas inom main på sidan
function AboutMe() {
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <article className="col-8">
                    <h1>Om mig</h1>
                    <p className="about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum ea distinctio aut enim, ullam ducimus maiores minus, est dolore optio natus, dolorem molestiae officia veritatis dolorum maxime aperiam libero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nostrum, vero incidunt earum quos quaerat excepturi dolore officiis, dolorum tempore alias sint illum necessitatibus non illo. Aliquam voluptates soluta vero.</p>
                </article>
            </div>
        </div>
    );
}

// Exporterar komponenten för användning av Router/SPA
export default AboutMe