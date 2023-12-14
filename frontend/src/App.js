<<<<<<< HEAD
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
=======
import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact />

      <ProtectedRoute path="/user" component={UserPage} />

      <ProtectedRoute path="/admin" component={AdminPage} />
    </div>
>>>>>>> 5a730030d3d06188c9419ded8ad4b7c330a1f51d
  );
}

export default App;
