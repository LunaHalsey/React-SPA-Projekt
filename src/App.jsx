// App.jsx Denna sida är grunden till alla de andra sidorna

// Importerar React dependencies
import React from "react";

// Importerar Redux dependencies
import { useSelector } from 'react-redux';

// Importerar Router dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importerar SPA-sidorna/komponenter
import Home from './page/Home'
import AboutMe from './page/AboutMe'
import CV from './page/CV'
import Contact from './page/Contact'
import Projects from './page/Projects'

// Importerar sidhuvud-komponenten
import Header from './components/Header';

// Importerar sidfot-komponenten
import Footer from './components/Footer';


function App() {


  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>

      {/* Router funktionen */}
      <Router>

        {/* Här skapas sidhuvud på sidan */}
        <Header />

        {/* main-klassen som ändras när färgtemat ändras  */}
        <main className={darkMode ? "dark" : "light"}>

          {/* SPA-sidorna */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

        </main>

      </Router>
      {/* Här skapas sidfot på sidan */}
      <Footer />
    </div>
  );
}

export default App;
