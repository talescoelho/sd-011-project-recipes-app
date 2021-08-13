import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import createRecipeObject from '../helpers/createRecipeObject';
import URLDictionary from '../helpers/endpoints';
import useDinamicFetch from '../hooks/useDinamicFetch';
import useFetch from '../hooks/useFetch';
import { setFilterByCategory, setToRender } from '../redux/slices/fetchReceitas';

function CategoryButtons() {
  const [categories, setCategories] = useState();
  const { categoriesId, type, filterByCategory } = createRecipeObject();
  const { data, isLoading } = useFetch(URLDictionary[categoriesId]);
  const [response, setUrl] = useDinamicFetch();
  const dispatch = useDispatch();
  const LIMIT_CATEGORIES = 5;

  const getCatgories = () => {
    setCategories(Object.values(data[type]));
  };

  useEffect(() => {
    if (data) {
      getCatgories();
    }
  }, [data]);

  // useEffect(() => {
  //   if (response) {
  //     dispatch(setToRender(response));
  //   }
  // }, [response]);

  // const getRecipesCategorie = ({ target: { value } }) => {
  //   const url = `${URLDictionary[filterByCategory]}${value}`;
  //   setUrl(url);
  // };

  if (!categories || isLoading) return <p>Loading...</p>;

  return (
    <nav>
      <button
        type="button"
        data-testid="All-category-filter"
        value="all"
        // onClick={ getRecipesCategorie }
        onClick={ () => setFilterByCategory('All') }
      >
        All
      </button>
      {categories.slice(0, LIMIT_CATEGORIES).map(({ strCategory }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          value={ strCategory }
          // onClick={ getRecipesCategorie }
          onClick={ () => setFilterByCategory(strCategory) }
        >
          { strCategory }
        </button>
      ))}
    </nav>
  );
}

export default CategoryButtons;
