import React from 'react';
import { Layout, SearchForm, CocktailsList } from '../components';
import { useTheme } from '../hooks';

function Drinks() {
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
        <SearchForm type="cocktails" />
        <CocktailsList />
      </main>
    </Layout>
  );
}

export default Drinks;
