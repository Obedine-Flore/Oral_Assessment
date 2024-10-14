// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure you import your App component

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Ensure this matches your HTML file
);
