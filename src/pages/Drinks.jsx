import React from 'react';
import { Layout, CocktailsList } from '../components';
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
    <Layout title="Bebidas" search>
      <main style={ styles.main }>
        <CocktailsList />
      </main>
    </Layout>
  );
}

export default Drinks;
