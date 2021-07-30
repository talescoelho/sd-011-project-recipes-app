import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/Searchbar';
import RecipesProvider from './provider/recipesProvider';

function App() {
  return (
    <div>
      <RecipesProvider>
        <Searchbar />
      </RecipesProvider>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    </div>
  );
}

export default App;
