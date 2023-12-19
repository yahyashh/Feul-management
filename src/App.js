import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";
import CreateUser from "./pages/Admin/CreateUser";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact />

      <Route path="/user" component={UserPage} />

      <Route path="/admin" component={AdminPage} />

      <Route path="/CreateUser" component={CreateUser} />

    </div>
  );
}

export default App;
