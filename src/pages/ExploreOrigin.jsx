import React from 'react';
import { Layout, HeaderPage } from '../components';
import { useTheme } from '../hooks';

function ExploreOrigin() {
  const { colors } = useTheme();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Explorar Origem">
      <main style={ styles.main }>
        <HeaderPage pageName="Explorar Origem" search />
      </main>
    </Layout>
  );
}

export default ExploreOrigin;
