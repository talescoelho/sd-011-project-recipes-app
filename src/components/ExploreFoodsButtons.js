import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';

function ExploreFoodsButtons() {
  const { data } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();
  const [redirectToDetails, setRedirectToDetails] = useState(false);

  function handleRandomFood() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    dispatch(getRecipes(URL));
  }

  useEffect(() => {
    if (data.length !== 0) {
      setRedirectToDetails(true);
    }
  }, [data]);

  if (redirectToDetails) {
    const { meals } = data;
    const { idMeal } = meals[0];
    return <Redirect to={ `/comidas/${idMeal}` } />;
  }

  return (
    <section>
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleRandomFood }
      >
        Me Surpreenda!
      </button>
    </section>
  );
}

export default ExploreFoodsButtons;
