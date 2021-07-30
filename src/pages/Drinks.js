import React, { useContext } from 'react';
import Header from '../components/Header';
import CardCatalog from '../components/CardCatalog';
import GlobalContext from '../context/GlobalContext';

function Drinks() {
  const headerProps = {
    title: 'Bebidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const { catalog } = useContext(GlobalContext);

  return (
    <div>
      <Header props={ headerProps } />
      {catalog && <CardCatalog />}
    </div>
  );
}

export default Drinks;
