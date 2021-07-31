import React, { useContext, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import MainContext from '../Context/MainContext';

function Foods() {
  const { dataFoods, setPage } = useContext(MainContext);

  function thisPage() {
    setPage('foods');
  }

  useEffect(() => {
    thisPage();
  }, []);

  console.log(dataFoods);
  return (
    <div>
      <header>
        <button type="button" data-testid="search-top-btn">passa</button>
      </header>
      <SearchBar />
    </div>
  );
}

export default Foods;
