import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import {
  getInitialDrinksRecipes,
  getDrinksCategoryList,
  getDrinksByCategory,
}
  from '../services/theCockTailAPI';

function Drinks() {
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
      getInitialDrinksRecipes()
        .then((drinks) => {
          setData(drinks);
        });
    } else {
      getDrinksByCategory(innerText)
        .then((drinks) => {
          setData(drinks);
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
    getInitialDrinksRecipes()
      .then((drinks) => {
        setData(drinks);
        getDrinksCategoryList()
          .then((drinksCategory) => {
            setCategoryList(drinksCategory);
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
      <Header title="Bebidas" isButtonVisible />
      <button
        data-testid="All-category-filter"
        type="button"
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

export default Drinks;
