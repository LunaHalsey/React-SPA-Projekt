// FetchAPI.jsx skapar det som hämtar och renderar namn, beskrivning och länkar till tidigare utförda projekt.

// useState
import { useEffect, useState } from "react";

export function FetchAPI() {

    // Länk till GitHub som datan hämtas från
  const URL = "https://api.github.com/users/LunaHalsey/repos"; //URL:en som datan hämtas från

  const [data, setData] = useState([]); //Skapar först ett tomt array


useEffect(() => {
    // useEffect används för att hantera sidoeffekter

    fetch(URL) // Gör ett HTTP GET-anrop till den angivna URL:en
        .then((resp) => resp.json())
	   // Hanterar svaret från servern genom att omvandla det till JSON-format
        .then((data) => {
        setData(data); // Uppdaterar komponentens state med den hämtade datan
        console.log(data); //loggar egenskaper
        });
},  []); // Tom array innebär att useEffect endast körs vid komponentens första rendering


return (
    <section>
        {/* Skapar article-div för varje projekt som hämtas */}
        {data.map((repo) => (
        <article className="projects" key={repo.id}>
            <a href={repo.html_url}>
            <h2>{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
        </article>
        ))}
    </section>
);
}