import React from 'react';
import { Layout, HeaderPage } from '../components';
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
        <HeaderPage pageName="Explorar Bebidas" />
      </main>
    </Layout>
  );
}

export default DrinksExplore;
