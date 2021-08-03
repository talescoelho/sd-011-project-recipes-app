import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import randomFetch from '../service/apiRandomRecipe';

function Explore({ localOrigin, mealOrDrink }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dataApi } = useSelector(({ randomRecipe }) => randomRecipe);

  React.useEffect(() => {
    async function fetchDidMount() {
      const trar = mealOrDrink;
      dispatch(await randomFetch(trar));
    }
    fetchDidMount();
  }, [dispatch, mealOrDrink]);

  const checker = () => {
    if (mealOrDrink === 'comidas') {
      return dataApi.meals && dataApi.meals.map((e) => e.idMeal);
    }
    return dataApi.drinks && dataApi.drinks.map((e) => e.idDrink);
  };

  const random = checker();

  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push(`/explorar/${mealOrDrink}/ingredientes`);
        } }
      >
        Por Ingredientes
      </button>
      { localOrigin && (
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => {
            history.push(`/explorar/${mealOrDrink}/area`);
          } }
        >
          Por Local de Origem
        </button>
      ) }
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push(`/${mealOrDrink}/${random}`);

        } }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

Explore.propTypes = {
  mealOrDrink: PropTypes.string.isRequired,
  localOrigin: PropTypes.string.isRequired,
};

export default Explore;

Explore.propTypes = {
  localOrigin: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
};
