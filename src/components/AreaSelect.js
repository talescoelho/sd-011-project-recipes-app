import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiAreaFetch from '../service/apiAreaFetch';
import searchCase from '../service/apiSearchBar';
import RecipeCards from './RecipeCards';

function AreaSelect() {
  const dispatch = useDispatch();
  const { meals } = useSelector(({ areaReducer }) => areaReducer.dataApi);
  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi } = stateReduxSearch;
  const limitSearch = 12;
  const [newData, setNewData] = useState(dataApi.meals);

  useEffect(() => {
    async function getApi() {
      dispatch(await apiAreaFetch());
      dispatch(await searchCase('meal'));
    }
    getApi();
  }, [dispatch]);

  useEffect(() => {
    function setNewdataApiInfo() {
      setNewData(dataApi.meals);
    }
    setNewdataApiInfo();
  }, [dataApi]);

  function filterArea({ target }) {
    const { value } = target;
    setNewData(dataApi.meals.filter(({ strArea }) => strArea.includes(value)));
  }

  return (
    <>
      <select
        className="dropDown"
        data-testid="explore-by-area-dropdown"
        onChange={ filterArea }
      >
        <option data-testid="All-option" value="">All</option>
        { meals !== undefined && Object.values(meals).map(({ strArea }, index) => (
          <option key={ index } data-testid={ `${strArea}-option` }>{ strArea }</option>
        )) }
      </select>
      { newData
        && newData
          .map((e, i) => i < limitSearch && (
            <RecipeCards
              comidasOuBebidas="comidas"
              idItem={ e.idMeal }
              index={ i }
              key={ i }
              src={ e.strMealThumb }
              name={ e.strMeal }
            />
          )) }

    </>
  );
}

export default AreaSelect;
