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

  if (!recipes) {
    console.log(recipes);
    return (
      <p> carregando!</p>);
  }

  function surpreenda() {
    dispatch(fetchRecipes({ searchTerm: '', category: 'receita_aleatoria' }));

    return <Redirect to={ `/comidas/${!recipes && recipes[0].idMeal}` } />;
  }

  return (
    <Layout title="Explorar Comidas">
      <main style={ styles.main }>
        { console.log(recipes)}
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
        {/* <Link to={ `/comidas/${!recipes && recipes[0].idMeal}` }> */}
        <button type="button" data-testid="explore-surprise" onClick={ () => surpreenda() }>
          Me Surpreenda!
        </button>
        {/* </Link> */}
      </main>
    </Layout>
  );
}

export default FoodExplore;
