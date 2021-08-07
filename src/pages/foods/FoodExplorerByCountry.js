import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';
import fetchByFilter from '../../services/data';
import Cards from '../../components/Cards';

export default function FoodExplorerByCountry() {
  const [areas, setAreas] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const urlToFetch = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const { meals } = await fetchByFilter(urlToFetch);
      setAreas(meals);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      let urlToFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      if (filter) {
        urlToFetch = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`;
      }
      const { meals } = await fetchByFilter(urlToFetch);
      const number = 12;
      setFilteredRecipes(meals.filter((_meal, index) => index < number));
    };
    getRecipes();
  }, [filter]);

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Origem" search fetchType="themealdb" />
      </SearchBarProvider>
      <label htmlFor="explore-by-area">
        <select
          data-testid="explore-by-area-dropdown"
          id="explore-by-area"
          onChange={ handleChange }
          value={ filter }
        >
          <option
            data-testid="All-option"
            value=""
          >
            All
          </option>
          { areas.length > 0 && areas.map(({ strArea }) => (
            <option
              data-testid={ `${strArea}-option` }
              key={ strArea }
              value={ strArea }
            >
              { strArea }
            </option>))}
        </select>
      </label>
      <section>
        { filteredRecipes.length > 0 && filteredRecipes.map((recipe, index) => (
          <Cards
            recipe={ recipe }
            type="themealdb"
            index={ index }
            key={ index }
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
