import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Initialize AOS
AOS.init();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
