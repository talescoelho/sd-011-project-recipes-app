import React, { useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchDrinks } from '../services/API';
import RecipesContext from '../context/RecipesContext';
import '../styles/recipesCard.css';

function Drinks() {
  const { setDrinks,
    dataFilter, drinks, compare, setCompare } = useContext(RecipesContext);

  useEffect(() => {
    const fetchDrink = async () => {
      const response = await fetchDrinks();
      const MAX = 12;
      const results = response.slice(0, MAX);
      setDrinks(results);
    };
    fetchDrink();
  }, [setDrinks]);

  useEffect(() => {
    const renderItens = () => {
      if (dataFilter <= 0) {
        return setCompare(drinks);
      }
      return setCompare(dataFilter);
    };
    renderItens();
  }, [setCompare, compare, drinks, dataFilter]);

  const fnAlert = (func, message) => {
    func(message);
  };

  if (dataFilter === null) {
    const msg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    return fnAlert(alert, msg);
  }

  if (dataFilter.length === 1) {
    return <Redirect to={ `/bebidas/${dataFilter[0].idDrink}` } />;
  }

  return (
    <>
      <Header />
      <section className="recipes-container">
        {compare.map((drink, index) => (
          <div
            className="recipe-card"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <Link to={ `/bebidas/${drink.idDrink}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                width="200px"
              />
              <p
                className="card-name"
                data-testid={ `${index}-card-name` }
              >
                {drink.strDrink}
              </p>
            </Link>
          </div>
        ))}
      </section>
      <LowerMenu />
    </>
  );
}

export default Drinks;
