import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
=======
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
<<<<<<< HEAD:frontend/src/index.js
import FuelProvider from './context/FeulProvider';
=======
>>>>>>> 5a730030d3d06188c9419ded8ad4b7c330a1f51d
>>>>>>> ca54f3b9e96bf3b62ef324c84bd3ec4f0330b154:src/index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <ChakraProvider>
    <BrowserRouter>
    <FuelProvider>
      <App />
    </FuelProvider>
    </BrowserRouter>
    </ChakraProvider>
>>>>>>> 5a730030d3d06188c9419ded8ad4b7c330a1f51d
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
>>>>>>> 5a730030d3d06188c9419ded8ad4b7c330a1f51d
