import React from 'react';
import { Layout } from '../components';
import { useTheme } from '../hooks';

function FavoriteRecipes() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Receitas Favoritas">
      <main style={ styles.main }>
        <p>ola mundo</p>
      </main>
    </Layout>
  );
}

export default FavoriteRecipes;
