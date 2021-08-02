import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCatalog from '../components/CardCatalog';
import GlobalContext from '../context/GlobalContext';

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
