import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';
import FetchApi from '../services/ApiFetch';

export default function Drinks() {
  const qty = 12;
  const recipes = useSelector((state) => state.Mechanics.searcResults);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchApi() {
      const results = await FetchApi('thecocktaildb', 'nome', '');
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
        title="Bebidas"
        haveSearchBtn
        searchTrigger="thecocktaildb"
      />
      <div>
        {
          recipes.drinks !== null && recipes.drinks !== undefined
            ? recipes.drinks.slice(0, qty).map((recipe, index) => (
              <RenderRecipes
                key={ index }
                title={ recipe.strDrink }
                index={ index }
                srcImage={ recipe.strDrinkThumb }
              />))
            : ''
        }
      </div>
      <Footer />
    </div>
  );
}
