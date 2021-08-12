import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useRecipes, fetchRecipes } from '../hooks';

function FoodExplore() {
  const { colors } = useTheme();
  const { recipes } = useRecipes();
  const dispatch = useDispatch();
  const surpriseMe = useRef(false);

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  function surpreenda() {
    dispatch(fetchRecipes({ searchTerm: '', category: 'receita_aleatoria' }));
    surpriseMe.current = true;
  }

  return (
    <Layout title="Explorar Comidas">
      {console.log(recipes)}
      <main style={ styles.main }>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => surpreenda() }
        >
          Me Surpreenda!
        </button>
        { surpriseMe.current
        && recipes.length > 0
        && <Redirect to={ `/comidas/${recipes[0].idMeal}` } /> }
      </main>
    </Layout>
  );
}

export default FoodExplore;
