import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';
import FetchApi from '../services/ApiFetch';

export default function Foods() {
  const [toggleValue, setToggle] = useState(false);
  const [catItens, setCatItens] = useState([]);
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

  useEffect(() => {
    async function fetchApi() {
      const catQty = 5;
      const results = await FetchApi('themealdb', null, null, 'list');
      const categories = results.meals.slice(0, catQty);
      setCatItens(categories);
    }
    fetchApi();
  }, []);

  async function categoryOnClickBtn(catName, index) {
    if (toggleValue === false) {
      const btn = document.querySelectorAll('#catBtn');
      btn[index].style.backgroundColor = 'grey';
      const results = await FetchApi('themealdb', null, null, [catName]);
      dispatch({
        type: 'MODIFY_SEARCH_RESULTS',
        payload: results,
      });
    }
    setToggle(!toggleValue);
    if (toggleValue === true) {
      const btn = document.querySelectorAll('#catBtn');
      btn[index].style.backgroundColor = 'rgb(239, 239, 239)';
      const results = await FetchApi('themealdb', 'nome', '');
      dispatch({
        type: 'MODIFY_SEARCH_RESULTS',
        payload: results,
      });
    }
  }

  return (
    <div>
      <Header
        title="Comidas"
        haveSearchBtn
        searchTrigger="themealdb"
      />
      <div className="catBtns">
        {
          catItens.map((item, index) => (
            <button
              key={ item.strCategory }
              type="button"
              id="catBtn"
              data-testid={ `${item.strCategory}-category-filter` }
              onClick={ () => categoryOnClickBtn(item.strCategory, index) }
            >
              {item.strCategory}
            </button>))
        }
      </div>

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
