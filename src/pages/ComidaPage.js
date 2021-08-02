import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AppContext from '../context/AppContext';
import LowerMenu from '../components/LowerMenu';
import SearchCategories from '../components/SearchCategories';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function ComidaPage() {
  const {
    showInput,
    data,
    setData,
    setFoodCategories,
    foodCategories,
  } = useContext(AppContext);

  const getInitialFood = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((result) => result.json())
      .then((rdata) => setData(rdata));
  };

  const fetchCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((result) => result.json())
      .then((rdata) => setFoodCategories(rdata));
  };

  useEffect(() => {
    getInitialFood();
    fetchCategories();
  }, []);

  const renderData = () => {
    const ALERT_TEXT = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    const RENDER_CONDITION = 11;

    // eslint-disable-next-line no-alert
    if (!data.meals) return alert(ALERT_TEXT);

    if (data.meals.length === 1) {
      return <Redirect to={ `/comidas/${data.meals[0].idMeal}` } />;
    }
    if (data.meals.length > 1) {
      return (
        <div>
          {data.meals.map((meal, index) => index <= RENDER_CONDITION && (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                alt={ meal.strMeal }
                src={ meal.strMealThumb }
              />
              <h3 data-testid={ `${index}-card-name` }>{meal.strMeal}</h3>
            </div>))}
        </div>
      );
    }
  };

  return (
    <div>
      <Header text="Comidas" lupa />
      {showInput && <SearchBar type="food" />}
      { foodCategories ? <SearchCategories type="food" /> : <p>Loading...</p> }
      { data ? renderData() : <p>faca uma pesquisa</p> }
      <LowerMenu />
    </div>
  );
}
