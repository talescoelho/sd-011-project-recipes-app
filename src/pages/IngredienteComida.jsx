import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import apiIngredients from '../service/apiIngredients';

function IngredienteComida() {
  const { dataApi: { meals } } = useSelector(({ ingredients }) => ingredients);
  const magicNumber = 12;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getApi() {
      dispatch(await apiIngredients('meals'));
    }
    getApi();
  }, [dispatch]);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { meals !== undefined
        && meals.slice(0, magicNumber).map(({ idIngredient, strIngredient }, index) => (
          <IngredientCard
            idItem={ idIngredient }
            name={ strIngredient }
            key={ index }
            index={ index }
            comidasOuBebidas="comidas"
          />
        )) }
      <Footer />
    </div>
  );
}

export default IngredienteComida;
