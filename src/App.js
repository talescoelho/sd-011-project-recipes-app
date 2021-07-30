import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Bebidas from './pages/Bebidas';
import Login from './pages/Login';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/bebidas" component={ Bebidas } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
