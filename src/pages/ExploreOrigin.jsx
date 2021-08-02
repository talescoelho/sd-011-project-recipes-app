import React from 'react';
import { Layout } from '../components';
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
    <Layout title="Explorar Origem" search>
      <main style={ styles.main }>
        <p>ola mundo</p>
      </main>
    </Layout>
  );
}

export default ExploreOrigin;
