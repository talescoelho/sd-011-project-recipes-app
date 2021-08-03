import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';
import FetchApi from '../services/ApiFetch';

export default function Foods() {
  const qty = 12;
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.Mechanics.searcResults);
  useEffect(() => {
    async function fetchApi() {
      const results = await FetchApi('themealdb', 'nome', '');
      dispatch({
        type: 'MODIFY_SEARCH_RESULTS',
        payload: results,
      });
    }
    fetchApi();
  }, []);

  return (
    <div>
      <Header
        title="Comidas"
        haveSearchBtn
        searchTrigger="themealdb"
      />
      <div>
        {
          recipes.meals !== null && recipes.meals !== undefined
            ? recipes.meals.slice(0, qty).map((recipe, index) => (
              <RenderRecipes
                key={ index }
                title={ recipe.strMeal }
                index={ index }
                srcImage={ recipe.strMealThumb }
              />))
            : ''
        }
      </div>
      <Footer />
    </div>
  );
}
