import React, { useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchFoods } from '../services/API';
import RecipesContext from '../context/RecipesContext';
import FiltersCategories from '../components/FiltersCategories';

function Foods() {
  const { setFoods,
    dataFilter, foods, compare,
    setCompare, loading, setLoading, foodsByItem } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    const fetchFood = async () => {
      const response = await fetchFoods();
      const MAX = 12;
      const results = response.slice(0, MAX);
      setLoading(false);
      setFoods(results);
    };
    fetchFood();
  }, [setFoods, setLoading]);

  useEffect(() => {
    const renderItens = () => {
      if (foodsByItem.length > 1) {
        return setCompare(foodsByItem);
      }
      if (dataFilter.length === 0) {
        return setCompare(foods);
      }
      return setCompare(dataFilter);
    };
    renderItens();
  }, [setCompare, compare, foods, dataFilter, foodsByItem]);

  const fnAlert = (func, message) => {
    func(message);
  };

  if (dataFilter === null) {
    const msg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    return fnAlert(alert, msg);
  }

  if (dataFilter.length === 1) {
    return <Redirect to={ `/comidas/${dataFilter[0].idMeal}` } />;
  }

  return (
    <>
      <Header />
      <FiltersCategories />
      <section className="recipes-container">
        {loading ? <ReactBootStrap.Spinner animation="border" />
          : compare.map((food, index) => (
            <div
              className="recipe-card"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Link to={ `/comidas/${food.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  width="200px"
                />
                <p
                  className="card-name"
                  data-testid={ `${index}-card-name` }
                >
                  {food.strMeal}
                </p>
              </Link>
            </div>
          ))}
      </section>
      <LowerMenu />
    </>
  );
}

export default Foods;
