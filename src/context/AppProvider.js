import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filterRadio, setFilterRadio] = useState('s');
  const [filterText, setFilterText] = useState('');
  const [filteredItem, setFilteredItem] = useState([]);
  const [idDetails, setIdDetails] = useState([]);
  const [mainItems, setMainItems] = useState();
  const [categories, setCategories] = useState();
  const [buttonFilter, setButtonFilter] = useState();
  const [loadingMainRecipes, setLoadingMainRecipes] = useState(true);
  const [filterButtonActive, setFilterButtonActive] = useState(false);
  const [selectedIngredientVerify, setSelectedIngredientVerify] = useState(false);
  const [selectedIngredientFood, setSelectedIngredientFood] = useState('');
  const [selectedIngredientDrink, setSelectedIngredientDrink] = useState('');
  const [ingredients, setIngredients] = useState();
  const [loadingExplore, setLoadingExplore] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');
  const [bttnFav, setBttnFav] = useState([]);

  async function fetchFood() {
    let endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchDrink() {
    let endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${filterRadio}=${filterText}`;
    if (filterRadio === 'i') {
      endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filterText}`;
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    if (data !== null) {
      setFilteredItem(data);
      document.getElementById('form').reset();
    } else {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  async function fetchMainRecipes(foodOrDrink) {
    let endPointItems = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let endPointCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    if (foodOrDrink === 'Bebidas') {
      endPointItems = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      endPointCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }
    if (selectedIngredientVerify) {
      endPointItems = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredientFood}`;
      if (foodOrDrink === 'Bebidas') {
        endPointItems = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredientDrink}`;
      }
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
    setSelectedIngredientFood('');
    setSelectedIngredientDrink('');
    setMainItems(dataItems);
    setCategories(dataCategory);
    setLoadingMainRecipes(false);
    setSelectedIngredientVerify(false);
  }

  async function fetchIngredients(foodOrDrink) {
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    if (foodOrDrink === 'Bebidas') {
      endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    }
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = foodOrDrink === 'Comidas' ? response.meals : response.drinks;
    setIngredients(data);
    setLoadingExplore(false);
  }

  function selectIngredient(e, foodOrDrink) {
    setSelectedIngredientVerify(true);
    if (foodOrDrink === 'Comidas') {
      setSelectedIngredientFood(e.currentTarget.value);
      console.log(e.currentTarget.value);
    }
    if (foodOrDrink === 'Bebidas') {
      setSelectedIngredientDrink(e.currentTarget.value);
    }
  }

  function toggle(e, drink) {
    const element = document.getElementById(e.target.value);
    element.classList.toggle('liIngredients');
    const elementText = element.innerText;

    if (drink) {
      const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const arrayDrink = getLocalStorage.cocktails[idDetails[0].idDrink];
      console.log(arrayDrink);
      const newArrayDrink = arrayDrink.includes(elementText)
        ? arrayDrink.filter((el) => el !== elementText)
        : [...arrayDrink, elementText];
      const newObject = {
        ...getLocalStorage,
        cocktails: { ...getLocalStorage.cocktails,
          [idDetails[0].idDrink]: newArrayDrink } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObject));
      return null;
    }
    const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const arrayFood = getLocalStorage.meals[idDetails[0].idMeal];
    console.log(arrayFood);
    const newArrayFood = arrayFood.includes(elementText)
      ? arrayFood.filter((el) => el !== elementText)
      : [...arrayFood, elementText];
    const newObject = {
      ...getLocalStorage,
      meals: { ...getLocalStorage.meals,
        [idDetails[0].idMeal]: newArrayFood } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newObject));
  }

  function getAndSetLocalStorage(inProcess, food, foodOrDrinkProcess) {
    const inProgress = localStorage.getItem('inProgressRecipes');
    if (!inProgress && inProcess) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(foodOrDrinkProcess));
    } if (inProcess) {
      const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const spreadLocal = food ? {
        ...getLocal,
        meals: {
          ...getLocal.meals,
          [idDetails[0].idMeal]: getLocal.meals[idDetails[0].idMeal]
            ? getLocal.meals[idDetails[0].idMeal]
            : [],
        },
      } : {
        ...getLocal,
        cocktails: {
          ...getLocal.cocktails,
          [idDetails[0].idDrink]: getLocal.cocktails[idDetails[0].idDrink]
            ? getLocal.cocktails[idDetails[0].idDrink]
            : [],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(spreadLocal));
      const array = food
        ? spreadLocal.meals[idDetails[0].idMeal]
        : spreadLocal.cocktails[idDetails[0].idDrink];
      console.log(array);

      array.forEach((el) => {
        const element = document.getElementById(el);
        const nameClass = document.getElementsByClassName(el);
        nameClass[0].classList.add('liIngredients');
        element.setAttribute('checked', true);
        console.log(element);
      });
    }
  }

  function ableButton(food, ingredientList, setButtonDisable) {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const arrayLocal = food ? getLocal.meals[`${idDetails[0].idMeal}`]
        : getLocal.cocktails[`${idDetails[0].idDrink}`];
      if (arrayLocal && arrayLocal.length === ingredientList.length) {
        setButtonDisable(false);
      } else {
        setButtonDisable(true);
      }
    }
  }

  const contextValue = {
    email,
    password,
    setEmail,
    setPassword,
    filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    filteredItem,
    setFilteredItem,
    fetchFood,
    fetchDrink,
    idDetails,
    setIdDetails,
    mainItems,
    setMainItems,
    categories,
    setCategories,
    buttonFilter,
    setButtonFilter,
    loadingMainRecipes,
    setLoadingMainRecipes,
    filterButtonActive,
    setFilterButtonActive,
    fetchMainRecipes,
    selectedIngredientVerify,
    setSelectedIngredientVerify,
    setSelectedIngredientFood,
    setSelectedIngredientDrink,
    selectedIngredientFood,
    selectedIngredientDrink,
    ingredients,
    setIngredients,
    loadingExplore,
    setLoadingExplore,
    fetchIngredients,
    selectIngredient,
    toggle,
    getAndSetLocalStorage,
    copySuccess,
    setCopySuccess,
    bttnFav,
    setBttnFav,
    ableButton,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
