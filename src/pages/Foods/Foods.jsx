import React from 'react';
import Footer from '../../globalComponents/Footer';
import Header from '../../globalComponents/Header';

function Foods({ match }) {
  return (
    <>
      <Header title="Comidas" glass="true" match={ match } />
      <div>
        Foods
      </div>
      <Footer />
    </>
  );
}

export default Foods;
