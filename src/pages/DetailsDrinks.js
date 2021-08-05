import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import DetailHeader from '../components/DetailHeader';
import DetailIngredient from '../components/DetailIngredient';
import DetailInstruction from '../components/DetailInstruction';

function DetailsDrinks() {
  const { id } = useParams();
  const {
    /*     drinkDetails, */
    setDrinkDetails,
    getDrinkById,
  } = useContext(MyContext);

  const [load, setLoad] = useState(true);

  const drink = useCallback(async () => {
    const fetch = await getDrinkById(id);
    setDrinkDetails(fetch[0]);
    setLoad(false);
  }, [
    setDrinkDetails,
    getDrinkById,
    id,
  ]);

  useEffect(() => {
    drink();
    return (
      setDrinkDetails([])
    );
  }, [drink, setDrinkDetails]);

  return !load ? (
    <main>
      <DetailHeader />
      <DetailIngredient />
      <DetailInstruction />
    </main>
  ) : <h1>Loading</h1>;
}

export default DetailsDrinks;
