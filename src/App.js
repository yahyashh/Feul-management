import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Uploadimage from './Components/Uploadimage/Uploadimage';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateUser from './Components/CreateUser/CreateUser';
import AssignVehicle from './Components/AssignVehicle/AssignVehicle';
// import Authentication from "./pages/Authentication";
// import UserPage from "./pages/UserPage";
// import AdminPage from "./pages/AdminPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/Uploadimage' element={<Uploadimage />} /> */}
        <Route path='/CreateUser' element={<CreateUser />} />
        <Route path='/Assignvehicle' element={<AssignVehicle />} />
        {/* <Route path='/user' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />} /> */}
        {/* <Route path='/Authentication' element={<Authentication />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
