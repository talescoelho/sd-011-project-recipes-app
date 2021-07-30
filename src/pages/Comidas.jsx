import React from 'react';
import { Layout, SearchForm, RecipeList } from '../components';
import { useTheme } from '../hooks';

function Comidas() {
  const { colors } = useTheme();
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };
  return (
    <Layout title="Comidas">
      <main style={ styles.main }>
        <SearchForm type="meals" />
        <RecipeList />
      </main>
    </Layout>
  );
}

export default Comidas;
