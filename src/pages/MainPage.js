import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Card from '../components/Cards';
import Footer from '../components/Footer';
import {
  fetchCategorieDrinkFilterAction,
  fetchDrinkAction,
  fetchCategorieFoodFilterAction,
  fetchFoodAction,
} from '../redux/actions';
import '../styles/comidas.css';

function handleChange(props, location, target, strCategory) {
  const { searchAllDrinks, searchDrink, searchAllFoods, searchFood } = props;
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((checkbox) => {
    if (target.id !== checkbox.id) {
      checkbox.checked = false;
    }
  });
  if (location === '/bebidas') {
    if (target.checked) {
      if (strCategory === 'All') {
        searchAllDrinks();
      } else {
        searchDrink(strCategory);
      }
    } else {
      searchAllDrinks();
    }
  } else if (target.checked) {
    if (strCategory === 'All') {
      searchAllFoods();
    } else {
      searchFood(strCategory);
    }
  } else {
    searchAllFoods();
  }
}

function MainPage(props) {
  const { requestDrink, requestFood } = props;
  const [testFetch, setTestFetch] = useState({});
  const [categories, setCategories] = useState({});
  const [categoryType, setCategoryType] = useState('');
  const [headerTittle, setHeaderTittle] = useState('');
  const categoriesLength = 5;
  const [location, setLocation] = useState(window.location.pathname);

  const fetchCategory = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resolve) => resolve.json())
      .then((response) => setTestFetch(response));
  }, []);

  useEffect(() => {
    requestDrink();
    requestFood();
  }, [requestDrink, requestFood]);

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
  }, [location]);

  if (location !== window.location.pathname) {
    setLocation(window.location.pathname);
  }

  if (!testFetch) {
    return (<p>Carreagando...</p>);
  }

  if (!categories[categoryType]) {
    return (
      <div>
        <Header title={ headerTittle } />
        Carregando...
        <div className="foods-cards">
          <Card location={ location } />
        </div>
        <Footer />
      </div>);
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
          onClick={ ({ target }) => handleChange(props, location, target, 'All') }
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
                onClick={ ({ target }) => {
                  handleChange(props, location, target, category.strCategory);
                } }
              />
              { category.strCategory }
            </label>
          ))
      }
      <div className="foods-cards">
        <Card location={ location } />
      </div>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchDrink: (category) => dispatch(fetchCategorieDrinkFilterAction(category)),
  searchAllDrinks: (category) => dispatch(fetchDrinkAction(category)),
  searchFood: (category) => dispatch(fetchCategorieFoodFilterAction(category)),
  searchAllFoods: (category) => dispatch(fetchFoodAction(category)),
  requestDrink: () => dispatch(fetchDrinkAction()),
  requestFood: () => dispatch(fetchFoodAction()),
});

MainPage.propTypes = {
  searchAllCategory: PropTypes.func,
  searchCategory: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(MainPage);
