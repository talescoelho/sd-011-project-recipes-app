import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import {
  getInitialMealsRecipes,
  getMealsCategoryList,
  getMealsByCategory,
}
  from '../services/theMealAPI';

function Foods() {
  const {
    setData,
    loading,
    setLoading,
    categoryList,
    setCategoryList,
    categorySelected,
    setCategorySelected,
  } = useContext(MainContext);

  function filterByCategory({ target: { innerText } }) {
    if (innerText === categorySelected || innerText === 'All') {
      getInitialMealsRecipes()
        .then((meals) => {
          setData(meals);
        });
    } else {
      getMealsByCategory(innerText)
        .then((meals) => {
          setData(meals);
        });
      setCategorySelected(innerText);
    }
  }

  function categoryButtons() {
    const maxCategoryNumber = 4;
    return categoryList.map((item, index) => (
      index > maxCategoryNumber ? null
        : (
          <button
            key={ index }
            type="button"
            data-testid={ `${item.strCategory}-category-filter` }
            onClick={ filterByCategory }
          >
            {item.strCategory}
          </button>)
    ));
  }

  useEffect(() => {
    setLoading(true);
    getInitialMealsRecipes()
      .then((meals) => {
        setData(meals);
        getMealsCategoryList()
          .then((mealsCategory) => {
            setCategoryList(mealsCategory);
            setLoading(false);
          });
      });
    return () => {
      setData([]);
      setCategoryList([]);
    };
  }, [setData, setLoading, setCategoryList]);

  return (
    <div>
      <Header title="Comidas" isButtonVisible />
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ filterByCategory }
      >
        All
      </button>
      {loading ? null : categoryButtons()}
      <RecipesCardsContainer test="recipe" />
      <FooterMenu />
    </div>

  );
}

export default Foods;
