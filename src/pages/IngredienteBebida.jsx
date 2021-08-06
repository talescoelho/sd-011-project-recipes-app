import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import apiIngredients from '../service/apiIngredients';

function IngredienteBebida() {
  const { dataApi: { drinks } } = useSelector(({ ingredients }) => ingredients);
  const magicNumber = 12;
  const dispatch = useDispatch();

  useEffect(() => {
    async function getApi() {
      dispatch(await apiIngredients('drinks'));
    }
    getApi();
  }, [dispatch]);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { drinks !== undefined
        && drinks.slice(0, magicNumber).map((
          {
            strIngredient1 }, index,
        ) => (
          <IngredientCard
            idItem={ index }
            name={ strIngredient1 }
            key={ index }
            index={ index }
            comidasOuBebidas="bebidas"
          />
        )) }
      <Footer />
    </div>
  );
}

export default IngredienteBebida;
