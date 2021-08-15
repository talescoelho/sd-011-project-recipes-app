import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import SearchBarProvider from '../context/searchBarProvider';
import { fetchAPI } from '../services';

export default function OriginLocal() {
  const [areas, setAreas] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function asyncFunc() {
      setAreas(await fetchAPI.food.area);
    }
    asyncFunc();
  }, []);

  function selectArea({ target }) {
    if (target.value !== 'all') {
      dispatch({ type: 'SET_SEARCH', search: { type: 'searchArea', key: target.value } });
    } else {
      dispatch({ type: 'SET_SEARCH', search: { type: 'searchName', key: '' } });
    }
  }
  return (
    <SearchBarProvider type="food">
      <Header title="Explorar Origem" showSearchButton />
      <select data-testid="explore-by-area-dropdown" onChange={ (e) => selectArea(e) }>
        <option value="all" data-testid="All-option">All</option>
        { areas.map(({ strArea }, index) => (
          <option
            value={ strArea }
            key={ index }
            data-testid={ `${strArea}-option` }
          >
            { strArea }
          </option>
        )) }
      </select>
      <RecipesCards type="food" />
      <Footer />
    </SearchBarProvider>
  );
}
