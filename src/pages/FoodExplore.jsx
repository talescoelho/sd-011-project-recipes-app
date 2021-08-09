import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useRecipes, fetchRecipes } from '../hooks';

function FoodExplore() {
  const { colors } = useTheme();
  const { recipes } = useRecipes();
  const dispatch = useDispatch();
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  function surpreenda() {
    dispatch(fetchRecipes({ searchTerm: '', category: 'receita_aleatoria' }));
  }

  return (
    <Layout title="Explorar Comidas">
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
        { recipes.length ? <Redirect to={ `/comidas/${recipes[0].idMeal}` } /> : null}
      </main>
    </Layout>
  );
}

export default FoodExplore;
