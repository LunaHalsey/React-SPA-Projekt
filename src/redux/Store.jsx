// Store.js Store för nattlägets Redux funktion

import ThemeReducer from './reducers/ThemeReducer';
import { createStore } from 'redux';

const Store = createStore(ThemeReducer);

// Exporterar komponent
export default Store;