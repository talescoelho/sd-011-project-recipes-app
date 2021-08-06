import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import searchCase from '../service/apiSearchBar';
import IngredientCard from '../components/IngredientCard';

function IngredienteBebida() {
  const { dataApi: { drinks } } = useSelector(({ searchItems }) => searchItems);
  const magicNumber = 13;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getApi() {
      dispatch(await searchCase('drink'));
    }
    getApi();
  }, [dispatch]);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { drinks !== undefined
        && drinks.slice(magicNumber).map((
          { idDrink, strDrink, strDrinkThumb }, index,
        ) => (
          <IngredientCard
            idItem={ idDrink }
            name={ strDrink }
            key={ index }
            index={ index }
            src={ strDrinkThumb }
            comidasOuBebidas="comidas"
          />
        )) }
      <Footer />
    </div>
  );
}

export default IngredienteBebida;
