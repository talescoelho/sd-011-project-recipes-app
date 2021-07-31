import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function ReceitasFeitas() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Receitas Feitas">
      <main style={ styles.main }>
        <HeaderPage pageName="Receitas Feitas" />
      </main>
    </Layout>
  );
}

export default ReceitasFeitas;
