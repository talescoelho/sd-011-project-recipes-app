import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import {
  fetchCategorieDrinkFilterAction,
  fetchDrinkAction,
  fetchCategorieFoodFilterAction,
  fetchFoodAction,
} from '../redux/actions';
import '../styles/comidas.css';

const classButton = 'category-button';
const activeClassButton = 'category-button-active';

function handleClass({ target }) {
  const buttons = [...target.parentNode.children];
  if (target.className !== activeClassButton) {
    buttons.forEach((button) => {
      button.className = classButton;
    });
    target.className = activeClassButton;
  } else {
    target.className = classButton;
    buttons[0].className = activeClassButton;
  }
}

function handleChange(props, location, selectCategory, strCategory) {
  const { searchAllDrinks, searchDrink, searchAllFoods, searchFood } = props;
  const { selectedCategory, setSelectedCategory } = selectCategory;
  if (location === '/bebidas') {
    if (selectedCategory !== strCategory) {
      if (strCategory !== 'All') {
        searchDrink(strCategory);
        setSelectedCategory(strCategory);
      } else {
        searchAllDrinks();
        setSelectedCategory('All');
      }
    } else {
      searchAllDrinks();
      setSelectedCategory('All');
    }
  } else if (selectedCategory !== strCategory) {
    if (strCategory !== 'All') {
      searchFood(strCategory);
      setSelectedCategory(strCategory);
    } else {
      searchAllFoods();
      setSelectedCategory('All');
    }
  } else {
    searchAllFoods();
    setSelectedCategory('All');
  }
}

function MainPage(props) {
  const { location: { state } } = props;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { requestDrink, requestFood } = props;
  const [categories, setCategories] = useState({});
  const [categoryType, setCategoryType] = useState('');
  const [headerTittle, setHeaderTittle] = useState('');
  const [classNameItem, setClassNameItem] = useState('foods-cards');
  const [filterFrom, setFilterFrom] = useState(null);
  const categoriesLength = 5;
  const [location, setLocation] = useState(window.location.pathname);
  const selectCategory = {
    selectedCategory,
    setSelectedCategory,
  };

  const fetchCategory = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    setFilterFrom(state);
  }, [state]);

  useEffect(() => {
    if (!filterFrom) {
      if (location === '/bebidas') {
        setCategoryType('drinks');
        setHeaderTittle('Bebidas');
        fetchCategory('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', setCategories);
        requestDrink();
      } else {
        setCategoryType('meals');
        setHeaderTittle('Comidas');
        fetchCategory('https://www.themealdb.com/api/json/v1/1/list.php?c=list', setCategories);
        requestFood();
      }
    }
  }, [filterFrom, location, requestDrink, requestFood]);

  if (location !== window.location.pathname) {
    setLocation(window.location.pathname);
  }

  if (!categories[categoryType]) {
    return (
      <div>
        <Header title={ headerTittle } />
        Carregando...
        <div className={ classNameItem }>
          <Cards location={ location } state={ filterFrom } />
        </div>
        <Footer />
      </div>);
  }

  return (
    <div>
      <Header
        title={ headerTittle }
        setClassNameItem={ setClassNameItem }
        classNameItem={ classNameItem }
      />
      <div className="buttons-container">
        <button
          data-testid="All-category-filter"
          id="All"
          type="button"
          name="category"
          className={ filterFrom ? classButton : activeClassButton }
          onClick={ (event) => {
            handleChange(props, location, selectCategory, 'All');
            handleClass(event);
            if (filterFrom) {
              setFilterFrom(false);
            }
          } }
        >
          All
        </button>
        {
          categories[categoryType].filter((_, index) => index < categoriesLength)
            .map((category, index) => (
              <button
                key={ index }
                data-testid={ `${category.strCategory}-category-filter` }
                id={ category.strCategory }
                type="button"
                name="category"
                className={ classButton }
                value={ category.strCategory }
                onClick={ (event) => {
                  handleChange(props, location, selectCategory, category.strCategory);
                  handleClass(event);
                  if (filterFrom) {
                    setFilterFrom(false);
                  }
                } }
              >
                { category.strCategory }
              </button>
            ))
        }
      </div>
      <div className={ classNameItem }>
        <Cards location={ location } state={ filterFrom } />
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
