import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";
import CreateUser from "./pages/Admin/CreateUser";
import UserDetial from "./pages/Admin/UserDetial";
import VehicleDetial from "./pages/Admin/VehicleDetial";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact />

      <Route path="/user" component={UserPage} />

      <Route path="/admin" component={AdminPage} />

      <Route path="/CreateUser" component={CreateUser} />

      <Route path="/UserDetial" component={UserDetial} />

      <Route path="/VehicleDetial" component={VehicleDetial} />

    </div>
  );
}

export default App;
