import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme, useCocktails, fetchCocktails } from '../hooks';

function DrinksExplore() {
  const { colors } = useTheme();
  const { cocktails } = useCocktails();
  const dispatch = useDispatch();
  const surpriseMe = useRef(false);

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  function surpreenda() {
    dispatch(fetchCocktails({ searchTerm: '', category: 'cocktail_aleatoria' }));
    surpriseMe.current = true;
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
          { surpriseMe.current
            && cocktails.length > 0
            && <Redirect to={ `/bebidas/${cocktails[0].idDrink}` } /> }
        </Link>
      </main>
    </Layout>
  );
}

export default DrinksExplore;
