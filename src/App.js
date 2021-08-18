import Inicio from './components/Inicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './components/Card';
import Productos from './components/Productos';
import './global.css';



function App() {
  return (


   
    <Router>
    <div>
    <div className="navbar navbar-expand-lg navbar-light bg">
      <Link to="/"  className="nav-link" >
      Home
      </Link>
      <Link to="/productos"  className="nav-link" >
      Viajes
      </Link>

      <Link to="/productos"  className="nav-link" >
      🛒
      </Link>


    </div>
      <hr/>
      <Switch>
      <Route path="/productos">
      <Productos/>
      </Route> 
      <Route path="/">
        <Inicio/>
      </Route>
      </Switch>
    </div>

    </Router>
    
  );
}

export default App;
