import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Messanger from "./pages/messanger/Messanger";
function App() {
  const{user} = useContext(AuthContext)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/login">
            {user ?<Redirect to="/"/>: <Login/>}  
          </Route> 
          <Route path="/register">
            {user ?<Redirect to="/"/>: <Register/>}  
          </Route>
          <Route path="/messanger">
            {!user ?<Redirect to="/"/>: <Messanger />}  
          </Route>

          <Route path="/profile/:username" component={Profile}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
