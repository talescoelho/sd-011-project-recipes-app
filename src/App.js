import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';
import Login from './Pages/Login';
import HomeRecipes from './Pages/HomeRecipes';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <h2>APP de Receitas</h2>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
<<<<<<< HEAD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ HomeRecipes } />

          {/* <Route path="/game" component={ Game } />
          <Route path="/settings" component={ Settings } />
          <Route path="/comidas" component={ HomeRecipes } /> */}

          {/* <Route path="/settings" component={ Settings } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } /> */}
        </Switch>
      </BrowserRouter>
=======
      <Routes />
>>>>>>> 33b614bcddf3564e6b6533dfc8e23ee057f97b65
    </div>
  );
}

export default App;
