import React from 'react';
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
          history.push(`/${mealOrDrink}/${checker()}`);
        } }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

export default Explore;

Explore.propTypes = {
  localOrigin: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
};
