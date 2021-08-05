import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoodsArea() {
  const [areas, setAreas] = React.useState(null);
  const [meals, setMeals] = React.useState([]);
  const [select, setSelect] = React.useState(null);
  const [error, setError] = React.useState(null);
  const maxCards = 12;

  React.useEffect(() => {
    function fetchAreas() {
      fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then((response) => response.json())
        .then((data) => setAreas(data))
        .catch((erro) => setError(erro));
    }

    function fetchMeals() {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then((data) => setMeals(data))
        .catch((erro) => setError(erro));
    }

    fetchAreas();
    fetchMeals();
  }, []);

  React.useEffect(() => {
    let url;
    if (select === 'all') {
      url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${select}`;
    }

    function fetchSelectedMeals() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMeals(data))
        .catch((erro) => setError(erro));
    }

    fetchSelectedMeals();
  }, [select]);

  function selectHandle({ target }) {
    setSelect(target.value);
  }

  if (!areas || !meals) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>A API retornou um erro, tente novamente em instantes...</p>;
  }

  return (
    <div>
      <Header title="Explorar Origem" />
      <div>
        <select
          onChange={ selectHandle }
          name="area-dropdown"
          data-testid="explore-by-area-dropdown"
        >
          <option value="all" data-testid="All-option">All</option>
          {areas && areas.meals.map(({ strArea }, index) => (
            <option
              key={ index }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}
            </option>
          ))}
        </select>
        <div>
          {meals.meals
          && meals.meals.filter((_, index) => index < maxCards).map((meal, index) => (
            <Link
              className="card"
              key={ index }
              to={ `/comidas/${meal.idMeal}` }
            >
              <div data-testid={ `${index}-recipe-card` }>
                <div>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                  />
                  <h4 data-testid={ `${index}-card-name` }>{meal.strMeal }</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
