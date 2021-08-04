import React, { useState, useEffect } from 'react';

export default function CarrouselFoods() {
  const [foodsRecomendations, setFoodsRecomendations] = useState([]);

  useEffect(() => {
    const FetchRecomendation = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const recomendationResponse = await response.json();
      const recomendationsQuantity = 6;

      const recomendationsArray = [];
      for (let i = 0; i < recomendationsQuantity; i += 1) {
        recomendationsArray.push(recomendationResponse.meals[i]);
      }
      setFoodsRecomendations(recomendationsArray);
      console.log(recomendationsArray);
    };
    return FetchRecomendation();
  }, []);

  return (
    <section>
      <h2>Recomendações de acompanhamentos</h2>
      { foodsRecomendations.map(({ strMeal }, i) => (
        <div data-testid={ `${i}-recomendation-card` } key={ `${strMeal} ${i}` }>
          <h3 data-testid={ `${i}-recomendation-title` }>{strMeal}</h3>
        </div>
      ))}
    </section>
  );
}
