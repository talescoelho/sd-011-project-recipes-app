import React, { useContext } from 'react';
import Header from '../components/Header';
import OneResultSearch from '../components/OneResultSearch';
import GlobalContext from '../context/GlobalContext';

function Foods() {
  const { catalog } = useContext(GlobalContext);
  const headerProps = {
    title: 'Comidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      { catalog
      && <OneResultSearch />}
      <Header props={ headerProps } />
    </div>
  );
}

export default Foods;
