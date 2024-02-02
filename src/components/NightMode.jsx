// NightMode.jsx skapar nattlägeskomponenten

// React
import React from 'react';

// Importerar Redux dependencies
import { useDispatch, useSelector } from 'react-redux';

// Importerar Redux actions
import { toggleTheme } from '../redux/actions/ThemeActions';

// SCSS
import '../scss/nightmode.scss';
import '../scss/style.scss';

// Bilder till nattlägesknapp
import moon from '../img/moon.png';
import sun from '../img/sun.png';


function NightMode() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    // knappen till nattläget och använder ändring av className="" för att ändra stil på knappen
    return (
        <div className={darkMode ? "dark" : "light"}>
        <button className="night-mode-toggle" onClick={handleToggle}>
        {darkMode ? <img src={sun} alt="Sun" /> : <img src={moon} alt="Moon" />}
        </button>
        </div>
    );
}

// Exporterar komponenten
export default NightMode;
