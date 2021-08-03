import React from 'react';
import { Layout, RecipeList } from '../components';
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
        <RecipeList />
      </main>
    </Layout>
  );
}

export default Foods;
