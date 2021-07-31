import React from 'react';
import { Layout, HeaderPage } from '../components';
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
        <HeaderPage pageName="Receitas Favoritas" />
      </main>
    </Layout>
  );
}

export default FavoriteRecipes;
