import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import HomeRecipes from './Pages/HomeRecipes';
import loginbg from './loginbg.mp4';

function App() {
  return (
    <div className="meals">
      <h2 className="title">Cozinhando com Gosto</h2>
      <video
        width="360"
        height="640"
        playsinline
        autoPlay
        muted
        loop
        className="bgVideo"
      >
        <source src={ loginbg } type="video/mp4" />
      </video>
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
    </div>
  );
}

export default App;
