import React, { useEffect, useState } from 'react';

function InProgressCard() {
  const verifingId = localStorage.getItem('id');
  const [mealDetail, setMealDetail] = useState([]);
  const [ingred, setIngred] = useState([]);
  const [measure, setMeasure] = useState([]);

  let newId = '';
  if (verifingId) {
    newId = verifingId;
    localStorage.removeItem('id');
  }

  const foodToDetail = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const drinkToDetail = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    const getUrlMeal = async () => {
      const meal = await fetch(`${foodToDetail}${newId}`);
      const response = meal.json().then((res) => setMealDetail(res.meals[0]));
      return mealDetail;
    }
    getUrlMeal();
  }, [newId]);
  
  const {
    idMeal,
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
  } = mealDetail;


  const objIngred = Object.entries(mealDetail).filter((e) => {
    if (e[0].includes('strIngredient') && e[1] !== '') {
      return e[1];
    }
  });

  const objMeasure = Object.entries(mealDetail).filter((e) => {
    if (e[0].includes('strIngredient') && e[1] !== '') {
      return e[1];
    }
  });

  console.log('mealDetail', typeof mealDetail, mealDetail, idMeal);
  return (
    <div>
      <h3>{strMeal}</h3>
      <img width="150px" src={strMealThumb} alt="tumb" />
      <h4>{strArea}</h4>
      <h4>{strCategory}</h4>
      <h6>{strInstructions}</h6>
      {objIngred.forEach((e) => <h6>{e[1]}</h6>)}
    </div>
  );
}

export default InProgressCard;