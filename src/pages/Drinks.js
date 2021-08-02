import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCatalog from '../components/CardCatalog';
import GlobalContext from '../context/GlobalContext';
import ButtonsCategories from '../components/ButtonsCategories';

function Drinks() {
  const headerProps = {
    title: 'Bebidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const { catalog, setCatalog } = useContext(GlobalContext);

  useEffect(() => {
    function fetchAPI() {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCatalog(result);
        });
    }
    fetchAPI();
  }, [setCatalog]);

  return (
    <div>
      <Header props={ headerProps } />
      <ButtonsCategories categoryName={ headerProps.title } />
      {catalog && <CardCatalog />}
      <Footer />
    </div>
  );
}

export default Drinks;
