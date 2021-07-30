import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import RecipesAppProvider from './context/RecipesAppProvider';

function App() {
  return (
    <div className="meals">
      <RecipesAppProvider>
        <SearchBar />
      </RecipesAppProvider>
    </div>
  );
}

export default App;
