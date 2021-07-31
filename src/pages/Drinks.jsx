import React from 'react';
import { Layout, HeaderPage } from '../components';
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
    <Layout title="Bebidas">
      <main style={ styles.main }>
        <HeaderPage pageName="Bebidas" search />
      </main>
    </Layout>
  );
}

export default Drinks;
