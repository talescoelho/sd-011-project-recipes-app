import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function Explore() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Explorar">
      <main style={ styles.main }>
        <HeaderPage pageName="Explorar" />
      </main>
    </Layout>
  );
}

export default Explore;
