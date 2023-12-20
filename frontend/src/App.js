import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import Userhistory from '../src/pages/Userhistory/Userhistory';
import Uploadimage from '../src/pages/Uploadimage/Uploadimage';
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact />

      <ProtectedRoute path="/user" component={UserPage} />

      <ProtectedRoute path="/admin" component={AdminPage} />





      <Route path="/Uploadimage" component={Uploadimage} />

      <Route path="/Userhistory" component={Userhistory} />





    </div>
  );
}

export default App;
