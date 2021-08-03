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
    setLoading,
    categoryList,
    setCategoryList,
    categorySelected,
    setCategorySelected,
  } = useContext(MainContext);

  function filterByCategory({ target: { innerText } }) {
    setLoading(true);
    getDrinksByCategory(innerText)
      .then((drinks) => {
        setData(drinks);
        setLoading(false);
      });
    if (innerText === categorySelected || innerText === 'All') {
      setLoading(true);
      getInitialDrinksRecipes()
        .then((drinks) => {
          setData(drinks);
          setLoading(false);
        });
    } else {
      setCategorySelected(innerText);
    }
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

  const maxCategoryNumber = 4;
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

export default Drinks;
