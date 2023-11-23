import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Authentication} exact/>
      <Route path="/user" component={UserPage}/>
      <Route path="/admin" component={AdminPage}/>
    </div>
  );
}

export default App;
