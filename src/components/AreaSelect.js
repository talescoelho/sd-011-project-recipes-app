import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArea, fetchAreaFilter } from '../service/apiAreaFetch';
import searchCase from '../service/apiSearchBar';
import RecipeCards from './RecipeCards';

function AreaSelect() {
  const dispatch = useDispatch();

  const { meals } = useSelector(({ areaReducer }) => areaReducer.dataApi);
  const { filter } = useSelector(({ areaReducer }) => areaReducer);

  const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const { dataApi } = stateReduxSearch;
  const limitSearch = 12;
  const [newData, setNewData] = useState(dataApi.meals);

  useEffect(() => {
    async function getApi() {
      dispatch(await fetchArea());
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

  useEffect(() => {
    function setNewdataApiInfo() {
      setNewData(filter);
    }
    setNewdataApiInfo();
  }, [filter]);

  async function filterArea({ target }) {
    const { value } = target;
    console.log(value);
    dispatch(await fetchAreaFilter(value));
    if (value === 'All') setNewData(dataApi.meals);
    else setNewData(filter);
  }

  return (
    <>
      <select
        className="dropDown"
        data-testid="explore-by-area-dropdown"
        onChange={ filterArea }
      >
        <option data-testid="All-option">All</option>
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
