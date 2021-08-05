import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/design/Button';
import { Layout } from '../components';
import { useTheme } from '../hooks';

function Explore() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Explorar">
      <main style={ styles.main }>
        <Link to="/explorar/comidas">
          <Button
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </Button>
        </Link>
        <Link to="/explorar/bebidas">
          <Button
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </Button>
        </Link>
      </main>
    </Layout>
  );
}

export default Explore;
