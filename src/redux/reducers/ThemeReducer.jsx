// ThemeReducer.js Reducer till nattlägets Redux funktion, använder localstorage för att spara valet för senare besök
const ThemeReducer = (state = { darkMode: localStorage.getItem('darkMode') === 'true' }, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            const newDarkMode = !state.darkMode;
            localStorage.setItem('darkMode', newDarkMode);
            return { ...state, darkMode: newDarkMode };
        default:
            return state;
    }
};


// Exporterar komponent
export default ThemeReducer;