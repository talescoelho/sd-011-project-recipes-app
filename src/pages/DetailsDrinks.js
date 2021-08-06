import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import DetailHeader from '../components/DetailHeader';
import DetailIngredient from '../components/DetailIngredient';
import DetailInstruction from '../components/DetailInstruction';
import Recommendations from '../components/Recommendations';
import StartButton from '../components/StartButton';

function DetailsDrinks() {
  const { id } = useParams();
  const {
    drinkDetails,
    setDrinkDetails,
    getDrinkById,
    setDrinkIngredients,
  } = useContext(MyContext);

  const [load, setLoad] = useState(true);

  const drink = useCallback(async () => {
    const fetch = await getDrinkById(id);
    setDrinkDetails(fetch[0]);
    console.log(fetch);
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

  useEffect(() => {
    const length = -1;
    const takeIngredients = Object.keys(drinkDetails)
      .map((key) => (key.indexOf('strIngredient') > length ? drinkDetails[key] : ''))
      .filter((value) => value !== '' && value !== null && value);

    const ingredientAmount = Object.keys(drinkDetails)
      .map((key) => (key.indexOf('strMeasure') > length ? drinkDetails[key] : ''))
      .filter((value) => value !== '' && value !== ' ' && value !== null && value);

    const ingredients = ingredientAmount.map(
      (item, index) => `${item} ${takeIngredients[index]}`,
    );

    setDrinkIngredients(ingredients);
  }, [drinkDetails, setDrinkIngredients]);

  return !load ? (
    <main>
      <DetailHeader />
      <DetailIngredient />
      <DetailInstruction />
      <Recommendations />
      <StartButton />
    </main>
  ) : <h1>Loading</h1>;
}

export default DetailsDrinks;
