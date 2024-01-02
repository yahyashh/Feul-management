import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import Userhistory from '../src/pages/Userhistory/Userhistory';
import Uploadimage from '../src/pages/Uploadimage/Uploadimage';
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CreateUser from "./Components/Admin/CreateUser";
import UserDetial from "./Components/Admin/UserDetial";
import VehicleDetail from "./Components/Admin/VehicleDetial";
import Assigncar from "./Components/Admin/Assigncar";
import AssignVehicle from "./Components/Admin/AssignVehicle";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact />

      <Route path="/user" component={UserPage} />

      <Route path="/admin" component={AdminPage} />

      <Route path="/Uploadimage" component={Uploadimage} />

      <Route path="/Userhistory" component={Userhistory} />

      <Route path="/CreateUser" component={CreateUser} />

      <Route path="/assignweh" component={Assigncar} />

      <Route path="/UserDetial" component={UserDetial} />

      <Route path="/VehicleDetial" component={VehicleDetail} />
      
      <Route path="/AssignVehicle" component={AssignVehicle} />



    </div>
  );
}

export default App;
