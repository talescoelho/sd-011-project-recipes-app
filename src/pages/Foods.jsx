import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function Foods() {
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
        <HeaderPage pageName="Comidas" search />
      </main>
    </Layout>
  );
}

export default Foods;
