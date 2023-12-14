

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

  );
}

export default App;
