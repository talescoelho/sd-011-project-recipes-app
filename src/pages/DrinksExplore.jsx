import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useRecipes, fetchRecipes } from '../hooks';

function DrinksExplore() {
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
    <Layout title="Explorar Bebidas">
      <main style={ styles.main }>
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ () => surpreenda() }
          >
            Me Surpreenda!
          </button>
          { recipes.length ? <Redirect to={ `/comidas/${recipes[0].idMeal}` } /> : null}
        </Link>
      </main>
    </Layout>
  );
}

export default DrinksExplore;
