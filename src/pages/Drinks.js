import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';
import FetchApi from '../services/ApiFetch';

export default function Drinks() {
  const [toggleValue, setToggle] = useState(false);
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

  async function categoryOnClickBtn(catName, index) {
    if (toggleValue === false) {
      const btn = document.querySelectorAll('#drinkCatBtn');
      btn[index].style.backgroundColor = 'grey';
      const results = await FetchApi('thecocktaildb', null, null, [catName]);
      dispatch({
        type: 'MODIFY_SEARCH_RESULTS',
        payload: results,
      });
    }
    setToggle(!toggleValue);
    if (toggleValue === true) {
      const btn = document.querySelectorAll('#drinkCatBtn');
      btn[index].style.backgroundColor = 'rgb(239, 239, 239)';
      const results = await FetchApi('thecocktaildb', 'nome', '');
      dispatch({
        type: 'MODIFY_SEARCH_RESULTS',
        payload: results,
      });
    }
  }

  return (
    <div>
      <Header
        title="Bebidas"
        haveSearchBtn
        searchTrigger="thecocktaildb"
      />
      <div className="catBtns">
        {
          catItens.map((item, index) => (
            <button
              key={ item.strCategory }
              type="button"
              id="drinkCatBtn"
              data-testid={ `${item.strCategory}-category-filter` }
              onClick={ () => categoryOnClickBtn(item.strCategory, index) }
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
