import React from 'react';
import { Layout } from '../components';
import { useTheme } from '../hooks';

function ExploreIngredients() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Explorar Ingredientes">
      <main style={ styles.main }>
        <h1>Ola</h1>
      </main>
    </Layout>
  );
}

export default ExploreIngredients;
