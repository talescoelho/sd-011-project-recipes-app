import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useTheme } from '../hooks';

function DrinksExplore() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

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
          <button type="button" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </main>
    </Layout>
  );
}

export default DrinksExplore;
