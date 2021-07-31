import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function FoodExplore() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Explorar Comidas">
      <main style={ styles.main }>
        <HeaderPage pageName="Explorar Comidas" />
      </main>
    </Layout>
  );
}

export default FoodExplore;
