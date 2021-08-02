import React, { useContext } from 'react';
import Header from '../components/Header';
import CardCatalog from '../components/CardCatalog';
import GlobalContext from '../context/GlobalContext';
import Footer from '../components/Footer';

function Foods() {
  const headerProps = {
    title: 'Comidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const { catalog } = useContext(GlobalContext);

  return (
    <div>
      <Header props={ headerProps } />
      {catalog && <CardCatalog />}
      <Footer />
    </div>
  );
}

export default Foods;
