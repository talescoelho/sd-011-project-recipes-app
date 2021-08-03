import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/comidas.css';

const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function Drink() {
  const [drinks, setDrinks] = useState({});
  const [categories, setCategories] = useState({});
  const drinksLength = 12;
  const categoriesLength = 5;

  const fetchComidas = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    fetchComidas(endPoint, setDrinks);
    fetchComidas('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', setCategories);
  }, []);

  if (!drinks.drinks || !categories.drinks) {
    return <div>Carregando...</div>;
  }

  function handleChange(target, strCategory) {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
      if (target.id !== checkbox.id) {
        checkbox.checked = false;
      }
    });
    if (target.checked) {
      if (strCategory === 'All') {
        fetchComidas(endPoint, setDrinks);
      } else {
        fetchComidas(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`, setDrinks);
      }
    } else {
      fetchComidas(endPoint, setDrinks);
    }
  }
  return (
    <div>
      <Header />
      <label htmlFor="All">
        <input
          data-testid="All-category-filter"
          id="All"
          type="checkbox"
          name="category"
          value="All"
          onClick={ ({ target }) => handleChange(target, 'All') }
        />
        All
      </label>
      {
        categories.drinks.filter((_, index) => index < categoriesLength)
          .map((category, index) => (
            <label htmlFor={ category.strCategory } key={ index }>
              <input
                data-testid={ `${category.strCategory}-category-filter` }
                id={ category.strCategory }
                type="checkbox"
                name="category"
                value={ category.strCategory }
                onClick={ ({ target }) => handleChange(target, category.strCategory) }
              />
              { category.strCategory }
            </label>
          ))
      }
      <div className="foods-cards">
        { drinks.drinks.filter((_, index) => index < drinksLength)
          .map((drink, index) => (
            <Link
              className="card"
              data-testid={ `${index}-recipe-card` }
              key={ index }
              to={ `/bebidas/${drink.idDrink}` }
            >

              <Cards
                name={ drink.strDrink }
                thumb={ drink.strDrinkThumb }
                index={ index }
                key={ index }
              />
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default connect()(Drink);
