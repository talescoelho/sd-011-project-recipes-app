import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import searchCase from '../service/apiSearchBar';
import IngredientCard from '../components/IngredientCard';

function IngredienteComida() {
  const { dataApi: { meals } } = useSelector(({ searchItems }) => searchItems);
  const magicNumber = 13;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getApi() {
      dispatch(await searchCase('meal'));
    }
    getApi();
  }, [dispatch]);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { meals !== undefined
        && meals.slice(magicNumber).map(({ idMeal, strMeal, strMealThumb }, index) => (
          <IngredientCard
            idItem={ idMeal }
            name={ strMeal }
            key={ index }
            index={ index }
            src={ strMealThumb }
            comidasOuBebidas="comidas"
          />
        )) }
      <Footer />
    </div>
  );
}

export default IngredienteComida;
