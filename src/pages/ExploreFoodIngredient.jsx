import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import FooterMenu from '../components/FooterMenu';
import { requestIngredients } from '../services/requestIngredients';
import profileIcon from '../images/profileIcon.svg';

export default function ExploreFoodIngredient({ history }) {
  const [ingredients, setFetchIngredients] = useState([]);
  const { setMeals } = useContext(UserContext);
  useEffect(() => {
    const callAPIingredients = async () => {
      const callAPI = await requestIngredients();
      const result = callAPI.meals;
      setFetchIngredients(result);
    };
    callAPIingredients();
  }, []);
  const doze = 12;
  setMeals('');

  function getRecipeByIngredient(meal) {
    const num12 = 12;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient}`)
      .then((response) => response.json())
      .then((data) => data.meals.slice(0, num12))
      .then((dataT) => setMeals(dataT))
      .then(history.push('/comidas'));
  }
  if (!ingredients) return <div>is loading...</div>;
  return (
    <>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
        />
        <h1 data-testid="page-title">Explorar Ingredientes</h1>
      </header>
      <section className="meals">
        {ingredients.map((meal, index) => (index < doze ? (
          <button
            type="button"
            className="meal"
            key={ meal.idIngredient }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => getRecipeByIngredient(meal) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${meal.strIngredient}-Small.png` }
              alt={ `imagem do ${meal.strIngredient}` }
            />
            <p data-testid={ `${index}-card-name` }>{meal.strIngredient}</p>
          </button>
        ) : undefined))}
      </section>
      <FooterMenu />
    </>
  );
}

ExploreFoodIngredient.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
