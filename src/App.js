import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
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
      <SearchBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas" component={ Comidas } />
          <Route path="/explorar" component={ Explorar } />
          <Route path="/bebidas" component={ Bebidas } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
