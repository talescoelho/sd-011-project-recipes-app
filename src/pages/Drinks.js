import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';
import FetchApi from '../services/ApiFetch';

export default function Drinks() {
  const [catItens, setCatItens] = useState([]);
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

  useEffect(() => {
    async function fetchApi() {
      const catQty = 5;
      const results = await FetchApi('thecocktaildb', null, null, 'list');
      const categories = results.drinks.slice(0, catQty);
      setCatItens(categories);
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
      <div className="catBtns">
        {
          catItens.map((item) => (
            <button
              key={ item.strCategory }
              type="button"
              data-testid={ `${item.strCategory}-category-filter` }
            >
              {item.strCategory}
            </button>))
        }
      </div>
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
