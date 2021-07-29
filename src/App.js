import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
      <Searchbar />
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
