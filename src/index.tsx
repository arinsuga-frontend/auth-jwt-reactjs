import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/styles.css';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);