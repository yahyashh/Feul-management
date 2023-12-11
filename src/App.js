import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Uploadimage from './Components/Uploadimage/Uploadimage';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateUser from './Components/CreateUser/CreateUser';
import AssignVehicle from './Components/AssignVehicle/AssignVehicle';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Uploadimage' element={<Uploadimage />} />
          <Route path='/CreateUser' element={<CreateUser />} />
          <Route path='/Assignvehicle' element={<AssignVehicle />} />



        </Routes>

      </BrowserRouter>









    </>
  );
}

export default App;
