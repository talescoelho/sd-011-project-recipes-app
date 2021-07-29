import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD

function App() {
  return (
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
=======
import Routes from './routes/Routes';
import Provider from './context/Provider';
import SearchBar from './components/SearchBar';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Routes />
      <Login />
      <SearchBar />
    </Provider>
>>>>>>> main-group-16
  );
}

export default App;
