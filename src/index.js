import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia esto para React 18+
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Crea el "root" utilizando React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
