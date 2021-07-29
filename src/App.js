import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="meals">
      <SearchBar />
      <Switch />
    </div>
  );
}

export default App;
