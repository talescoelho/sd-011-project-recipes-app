import React, { useState, useEffect } from 'react';

export default function CarrouselDrinks() {
  const [drinkRecomendations, setDrinksRecomendations] = useState([]);

  useEffect(() => {
    const FetchRecomendation = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const recomendationResponse = await response.json();
      const recomendationsQuantity = 6;

      const recomendationsArray = [];
      for (let i = 0; i < recomendationsQuantity; i += 1) {
        recomendationsArray.push(recomendationResponse.drinks[i]);
        console.log('entrou no for');
      }
      setDrinksRecomendations(recomendationsArray);
    };
    return FetchRecomendation();
  }, []);

  return (
    <div>
      
      <h2>Nome</h2>
    </div>
  );
}
