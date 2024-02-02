# React projekt

Detta projekt innehåller koden för en Single Page Application (SPA)-webbplats som använder React.js.
Webbplatsen innehåller sidorna: Om mig, CV, Kontakt, och Projekt.

## Filstruktur

Skapade nya filer är inom mappar.
App.js är den sida som visas på webbplatsen. Sidhuvud (\<Header /\>) och sidfot (\<Footer /\> är samma på alla webbplatsens ”sidor”. Innehållet inom <main> ändras med React Router. Detta är SPA sidorna.
Webbplatsens olika SPA-sidor finns inom mappen ”page”. Sidorna är: Hem/startsidan (Home), Om mig (AboutMe), CV (CV), Kontakt (Contact), Projekt (Project).
Komponenter som används finns i mappen ”components”. Huvud- och subkomponenter finns i denna mapp. Exempel på komponenter är Sidhuvud (Header), Navigationsmenyn i sidhuvud (Navbar) och Nattläget (NightMode).
I mappen ”data” finns filer med tabelldata för CV-sidan.
Mappen ”img” innehåller bilder som används på webbplatsen.
Mappen ”redux” innehåller komponenter som används till Redux-funktionen som används till nattlägesfunktionen. Den är uppdelad i action (ThemeActions), reducers (ThemeReducer) och Store.
Webbplatsen stilmallar finns inom mappen ”scss”. Om en sida eller komponent behöver ändras med en stilmall, så kan den vara given sin egen stilmall.

## Projektets tekniska krav

### React Router
Router används för att ändra innehållen inom \<main\> på webbplatsen och skapa en fungerande SPA-webbplats. För att gå till de olika sidorna så använder man sig av navigationsmenyn.

### useState Hook
useState används på kontaktsidan. Det används för att presentera det som skrivits i formuläret och skickades.

### Redux
Redux används för att skapa nattlägesfunktionen vilket ändrar färgtemat som används på webbplatsen. Funktionen fungerar genom att ändra klassen i \<main\>, ex. \<main className=”light”\> till \<main className=”dark”\>. Färgteman ändras då bara inom \<main\> och element som har klassen ”light” eller ”dark”. Färgerna och dess variabler finns inom style.scss. Val av nattläge sparas inom localstorage för senare besök.

### CSS preprocessor
SASS används som CSS-preprocessor.

## För att köra React-applikationen

Hämta och öppna applikationen i exempelvis Visual Studio Code.

SASS används i projektet och måste då installeras. Skriv detta i terminalen för applikationen VS Code:
```
npm i sass --save-dev
```
För att starta React-applikationen så skriv detta i terminalen:
```
npm start
```