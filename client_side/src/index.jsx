import React from 'react';
import ReactDOM from 'react-dom/client';

// css import 
import "./assets/css/bootstrap.css"
import "./assets/css/animate.min.css"
import "./assets/css/style.css"
// css import end 


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

