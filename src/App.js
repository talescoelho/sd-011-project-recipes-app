import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';

// Tela principal de receitas de comidas: /comidas;
// Tela principal de receitas de bebidas: /bebidas;
// Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
// Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
// Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
// Tela de explorar: /explorar;
// Tela de explorar comidas: /explorar/comidas;
// Tela de explorar bebidas: /explorar/bebidas;
// Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
// Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;
// Tela de explorar comidas por local de origem: /explorar/comidas/area;
// Tela de perfil: /perfil;
// Tela de receitas feitas: /receitas-feitas;
// Tela de receitas favoritas: /receitas-favoritas.

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Recipes } />
      </Switch>

      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
  );
}

export default App;
