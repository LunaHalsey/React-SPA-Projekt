// index.js

// Importerar dependencies från React och ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// Importerar Redux store från Store.jsx
import Store from './redux/Store';

// Importerar stilar från index.css (denna css används inte)
import './index.css';

// Importerar huvudkomponenten till applikationen/webbplatsen
import App from './App';

// Importing a utility function for measuring web vitals
import reportWebVitals from './reportWebVitals';

//Skapar en root för React applikationen och renderar huvudkomponenten
const root = createRoot(document.getElementById('root'));
root.render(
  // Wrapping the entire application in React Strict Mode for additional checks
  <React.StrictMode>
    {/* Ger tillgång till Redux store till hela applikationen */}
    <Provider store={Store}>
      {/* Renderar App huvudkomponenten */}
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Invoking the function to report web vitals for performance monitoring
reportWebVitals();
