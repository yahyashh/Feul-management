import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Uploadimage from './Components/Uploadimage/Uploadimage';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Uploadimage' element={<Uploadimage />} />

        </Routes>

      </BrowserRouter>









    </>
  );
}

export default App;
