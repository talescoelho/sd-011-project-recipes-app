import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import MainContext from '../Context/MainContext';

function Foods() {
  const { dataFoods, setPage, limit } = useContext(MainContext);

  function thisPage() {
    setPage('foods');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataFoods.length === 1) {
    return <Redirect to={ `/comidas/${dataFoods[0].idMeal}` } />;
  }

  console.log(dataFoods);
  return (
    <div>
      <header>
        <button type="button" data-testid="search-top-btn">passa</button>
      </header>
      <SearchBar />
      { dataFoods.map((item, index) => index < limit && (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ item.strMealThumb }
            alt={ `Food ${item.strMeal}` }
            width="200"
          />
          <p data-testid={ `${index}-card-name` }>
            { item.strMeal }
          </p>
        </div>
      )) }
    </div>
  );
}

export default Foods;
