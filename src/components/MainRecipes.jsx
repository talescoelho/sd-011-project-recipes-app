import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainRecipes({ foodOrDrink }) {
  const [mainItems, setMainItems] = useState();
  const [categories, setCategories] = useState();
  const [buttonFilter, setButtonFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [filterButtonActive, setFilterButtonActive] = useState(false);

  const maxLengthItems = 12;
  const maxLengthCategories = 5;

  function renderRecipes(item, index) {
    return (
      <Link
        key={ index }
        to={ foodOrDrink === 'Comidas' ? `/comidas/${item.idMeal}`
          : `/bebidas/${item.idDrink}` }
      >
        <div data-testid={ `${index}-recipe-card` } key={ index }>
          <img
            src={ foodOrDrink === 'Comidas' ? item.strMealThumb : item.strDrinkThumb }
            alt="food_image"
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>
            {foodOrDrink === 'Comidas' ? item.strMeal : item.strDrink}
          </p>
        </div>
      </Link>
    );
  }

  async function fetchMainRecipes() {
    let endPointItems = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let endPointCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    if (foodOrDrink === 'Bebidas') {
      endPointItems = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      endPointCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }
    if (filterButtonActive) {
      endPointItems = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${buttonFilter}`;
      if (foodOrDrink === 'Bebidas') {
        endPointItems = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${buttonFilter}`;
      }
    }
    const requireItems = await fetch(endPointItems);
    const responseItems = await requireItems.json();
    const dataItems = foodOrDrink === 'Bebidas' ? responseItems.drinks
      : responseItems.meals;
    const requireCategory = await fetch(endPointCategory);
    const responseCategory = await requireCategory.json();
    const dataCategory = foodOrDrink === 'Bebidas' ? responseCategory.drinks
      : responseCategory.meals;
    setMainItems(dataItems);
    setCategories(dataCategory);
    setLoading(false);
  }

  function handleClick(e) {
    if (e.target.value === buttonFilter) {
      setFilterButtonActive(false);
      setLoading(true);
      setButtonFilter('');
      return;
    }
    setLoading(true);
    setButtonFilter(e.target.value);
    if (e.target.value === 'all') {
      setFilterButtonActive(false);
      return;
    }
    setFilterButtonActive(true);
  }

  useEffect(() => {
    fetchMainRecipes();
  }, [buttonFilter, filterButtonActive]);

  useEffect(() => {
    fetchMainRecipes();
  }, []);

  return (
    <div>
      {loading ? <span>Carregando...</span> : (
        <div>
          <div>
            {(
              categories.filter((item, index) => index < maxLengthCategories)
                .map((item, index) => (
                  <button
                    key={ index }
                    type="button"
                    data-testid={ `${item.strCategory}-category-filter` }
                    value={ item.strCategory }
                    onClick={ (e) => handleClick(e) }
                  >
                    { item.strCategory }
                  </button>
                ))
            )}
            <button
              type="button"
              value="all"
              onClick={ (e) => handleClick(e) }
              data-testid="All-category-filter"
            >
              All
            </button>
          </div>
          <div>
            {mainItems
              .filter((item, index) => index < maxLengthItems).map(renderRecipes) }
          </div>
        </div>
      )}
    </div>
  );
}

export default MainRecipes;

MainRecipes.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};
