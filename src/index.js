import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/styles.css';

//pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);