import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ButtonsCategories from '../components/ButtonsCategories';
import Footer from '../components/Footer';
import CardCatalog from '../components/CardCatalog';
import GlobalContext from '../context/GlobalContext';

function Foods() {
  const headerProps = {
    title: 'Comidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const { catalog, setCatalog } = useContext(GlobalContext);

  useEffect(() => {
    function fetchAPI() {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then((result) => {
          setCatalog(result);
        });
    }
    fetchAPI();
  }, [setCatalog]);

  return (
    <div>
      <Header props={ headerProps } />
      <ButtonsCategories categoryName={ headerProps.title } />
      {!catalog ? <div>Loading...</div> : <CardCatalog />}
      <Footer />
    </div>
  );
}

export default Foods;
