import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';
import '../css/comidas.css';
import { fetchCategorieDrinkFilterAction, fetchDrinkAction } from '../redux/actions';
import FoodCard from '../components/FoodCard';

function MainPage(props) {
  const [categories, setCategories] = useState({});
  const [categoryType, setCategoryType] = useState('');
  const [headerTittle, setHeaderTittle] = useState('');
  const categoriesLength = 5;
  const location = window.location.pathname;

  const fetchCategory = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    if (location === '/bebidas') {
      setCategoryType('drinks');
      setHeaderTittle('Bebidas');
      fetchCategory('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', setCategories);
    } else {
      setCategoryType('meals');
      setHeaderTittle('Comidas');
      fetchCategory('https://www.themealdb.com/api/json/v1/1/list.php?c=list', setCategories);
    }
  }, []);

  if (!categories[categoryType]) {
    return <div>Carregando...</div>;
  }

  function handleChange(target, strCategory) {
    const { searchAllCategory, searchCategory } = props;
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
      if (target.id !== checkbox.id) {
        checkbox.checked = false;
      }
    });
    if (target.checked) {
      if (strCategory === 'All') {
        searchAllCategory();
      } else {
        searchCategory(strCategory);
      }
    } else {
      searchAllCategory();
    }
  }

  return (
    <div>
      <Header title={ headerTittle } />
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
        categories[categoryType].filter((_, index) => index < categoriesLength)
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
      { location === 'bebidas' ? <DrinkCard /> : <FoodCard /> }
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchCategory: (category) => dispatch(fetchCategorieDrinkFilterAction(category)),
  searchAllCategory: (category) => dispatch(fetchDrinkAction(category)),
});

MainPage.propTypes = {
  searchAllCategory: PropTypes.func,
  searchCategory: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(MainPage);
