import Inicio from './components/Inicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Viajes from './components/Viajes';
import './global.css';
import Item from './components/Item';
import CartWidget from './components/CartWidget';
import {CartProv} from "./components/CartContext";



function App() {
  return (


    <Router>
    <div>
    <div className="navbar navbar-expand-lg navbar-light bg">
      <Link to="/"  className="nav-link" >
      Home
      </Link>
      <Link to="/category/viajes"  className="nav-link" >
      Viajes
      </Link>

      <Link to="/category/carrito"  className="nav-link" >
      🛒
      </Link>


    </div>
      <hr/>
      <Switch>
        <Route path="/category/carrito">
          <CartWidget/>
        </Route>
      <Route path="/category/viajes">
      <Viajes/>
      </Route> 
      <Route path="/">
        <Inicio/>
      </Route>
      <Route path="/item/:id">
        <Item/>
      </Route>
      </Switch>
    </div>

    </Router>
   
    
  );
}

export default App;
