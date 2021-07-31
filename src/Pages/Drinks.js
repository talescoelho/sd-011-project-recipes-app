import React, { useContext, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import MainContext from '../Context/MainContext';

function Drinks() {
  const { setPage, dataDrinks } = useContext(MainContext);

  function thisPage() {
    setPage('drinks');
  }

  useEffect(() => {
    thisPage();
  }, []);

  console.log(dataDrinks);
  return (
    <div>
      <header>
        <button type="button" data-testid="search-top-btn">passa</button>
      </header>
      <SearchBar />
    </div>
  );
}

export default Drinks;
