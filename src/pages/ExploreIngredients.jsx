import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function ExplorarIgredientes() {
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
        <HeaderPage pageName="Explorar Ingredientes" />
      </main>
    </Layout>
  );
}

export default ExplorarIgredientes;
