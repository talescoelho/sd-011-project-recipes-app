import React from 'react';
import './App.css';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';

function App() {
  return (
    <div className="meals">
      <Comidas />
      <Bebidas />
    </div>
  );
}

export default App;
