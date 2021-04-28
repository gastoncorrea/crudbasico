import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Navegacion from './components/common/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/common/Footer';
import ListarProducto from './components/ListarProducto';
import AgregarProducto from './components/AgregarProducto'

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Inicio></Inicio>
        </Route>
        <Route exact path='/producto'>
          <ListarProducto></ListarProducto>
        </Route>
        <Route exact path='/producto/nuevo'>
          <AgregarProducto></AgregarProducto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
