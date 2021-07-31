import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function Perfil() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Perfil">
      <main style={ styles.main }>
        <HeaderPage pageName="Perfil" />
      </main>
    </Layout>
  );
}

export default Perfil;
