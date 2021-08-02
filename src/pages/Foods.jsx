import React from 'react';
import { Layout } from '../components';
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
    <Layout title="Comidas" search>
      <main style={ styles.main }>
        <p>ola mundo</p>
      </main>
    </Layout>
  );
}

export default Foods;
