import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import Comidas from './pages/Comidas';
import Login from './pages/Login';
import RecipesProvider from './context/RecipesProvider';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import Detalhes from './pages/Detalhes';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarPorIngredientes from './pages/ExplorarPorIngredientes';
import ExplorarPorOrigem from './pages/ExplorarPorOrigem';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="meals">
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
