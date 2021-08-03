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
    setLoading,
    categoryList,
    setCategoryList,
  } = useContext(MainContext);

  function filterByCategory({ target: { innerText } }) {
    console.log(getMealsByCategory(innerText));
    setLoading(true);
    getMealsByCategory(innerText)
      .then((meals) => {
        console.log(meals);
        setData(meals);
        setLoading(false);
      });
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

  const maxCategoryNumber = 4;
  return (
    <div>
      <Header title="Comidas" isButtonVisible />
      {categoryList.map((item, index) => (
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
      ))}
      <RecipesCardsContainer />
      <FooterMenu />
    </div>

  );
}

export default Foods;
