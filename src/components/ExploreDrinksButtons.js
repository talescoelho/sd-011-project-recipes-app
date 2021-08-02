import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';

function ExploreDrinksButtons() {
  const { data } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();
  const [redirectToDetails, setRedirectToDetails] = useState(false);

  function handleRandomDrink() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    dispatch(getRecipes(URL));
  }

  useEffect(() => {
    if (data.length !== 0) {
      setRedirectToDetails(true);
    }
  }, [data]);

  if (redirectToDetails) {
    const { drinks } = data;
    const { idDrink } = drinks[0];
    return <Redirect to={ `/bebidas/${idDrink}` } />;
  }

  return (
    <section>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleRandomDrink }
      >
        Me Surpreenda!
      </button>
    </section>
  );
}

export default ExploreDrinksButtons;
