import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createRecipeObject from '../helpers/createRecipeObject';
import URLDictionary from '../helpers/endpoints';
import useFetch from '../hooks/useFetch';
import { getRecipes, setInput } from '../redux/slices/fetchReceitas';

function CategoryButtons() {
  const [categories, setCategories] = useState();
  const { categoriesId, type, filterByCategory } = createRecipeObject();
  const { data, isLoading, error } = useFetch(URLDictionary[categoriesId]);
  // const { input } = useSelector((state) => state.fetchReceitas);
  // const dispatch = useDispatch();
  const LIMIT_CATEGORIES = 5;

  const getCatgories = () => {
    setCategories(Object.values(data[type]));
  };

  useEffect(() => {
    if (data) {
      getCatgories();
    }
  }, [data]);

  // const {
  //   foodCategories,
  //   drinksCategories,
  //   loading,
  // } = useSelector((state) => state.fetchReceitas);

  const getRecipesCategorie = ({ target: { value } }) => {
    const url = `${URLDictionary[filterByCategory]}${value}`;
    console.log(url);
    // const response = await useFetch().data;
    // const { pathname } = window.location;
    // const currentURL = pathname.split('/')[1];
    // let url = currentURL === 'comidas'
    //   ? 'filterByFoodCategorie'
    //   : 'filterByDrinkCategorie';
    // if (value === input || value === 'all') {
    //   value = '';
    //   url = currentURL === 'comidas'
    //     ? 'foods'
    //     : 'drinks';
    // }
    // dispatch(setInput(value));
    // dispatch(getRecipes(url));
  };

  // useEffect(() => {
  //   const { pathname } = window.location;
  //   const currentURL = pathname.split('/')[1];
  //   const categoriesToSet = currentURL === 'comidas'
  //     ? foodCategories.meals
  //     : drinksCategories.drinks;
  //   setCategories(categoriesToSet);
  // }, [foodCategories, drinksCategories]);

  // if (loading || !categories || categories.length === 0) {
  //   return (<div>Loading</div>);
  // }

  if (!categories || isLoading) return <p>Loading...</p>;

  return (
    <nav>
      <button
        type="button"
        data-testid="All-category-filter"
        value="all"
        onClick={ getRecipesCategorie }
      >
        All
      </button>
      {categories.slice(0, LIMIT_CATEGORIES).map(({ strCategory }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          value={ strCategory }
          onClick={ getRecipesCategorie }
        >
          { strCategory }
        </button>
      ))}
    </nav>
  );
}

export default CategoryButtons;
