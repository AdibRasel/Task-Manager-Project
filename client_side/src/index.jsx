import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Provider } from "react-redux";


// css import 
// import "./assets/css/bootstrap.css"
// import "./assets/css/animate.min.css"
// import "./assets/css/style.css"
// css import end 


import App from './App';
// import store from './redux/stor/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

