import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components/design';
import { Layout } from '../components';
import { useTheme, useUser, updateEmail } from '../hooks';

function Home() {
  const { colors } = useTheme();
  const { email } = useUser();
  const dispatch = useDispatch();

  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Home">
      <main style={ styles.main }>
        <h1>oi</h1>
        <Button
          onClick={ () => dispatch(updateEmail('cris a lendaria')) }
        >
          Crica em mim
        </Button>
        <h1>{ email }</h1>
      </main>
    </Layout>
  );
}

export default Home;
