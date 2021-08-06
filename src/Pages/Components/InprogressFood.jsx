import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/InProgressFood.css';
import { manageDetailAPI } from '../../Helpers/convertUrlToID';

function InProgressFood() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({
    meals: null,
  });

  const arrayOfIngredients = [];
  const arrayOfMeasures = [];

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const detailRequest = await response.json();
      setItemDetail(manageDetailAPI(detailRequest));
    };
    fetchFood();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Parte que separa os ingredientes da receitas
  if (itemDetail.meals !== null) {
    const food = itemDetail.meals[0];

    const arrayOfIngredientsKey = Object
      .keys(food).filter((key) => key.includes('strIngredient'));
    const arrayOfMeasuresKey = Object
      .keys(food).filter((key) => key.includes('strMeasure'));
    arrayOfIngredientsKey.map((ingredient) => {
      if ((food[ingredient] !== ''
      && food[ingredient] !== ' '
      && food[ingredient] !== null)) {
        arrayOfIngredients.push(food[ingredient]);
      }
      return null;
    });
    arrayOfMeasuresKey.map((ingredient) => {
      if ((food[ingredient] !== ''
      && food[ingredient] !== ' '
      && food[ingredient] !== null)) {
        arrayOfMeasures.push(food[ingredient]);
      }
      return null;
    });
  }

  const { meals } = itemDetail;
  return meals !== null && (
    <div>
      <h1 data-testid="recipe-title">{meals[0].strMeal}</h1>
      <img
        width="350"
        src={ meals[0].strMealThumb }
        alt={ `Foto da comida chamada ${meals[0].strMeal}` }
        data-testid="recipe-photo"
      />
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <p data-testid="recipe-category">{meals[0].strCategory}</p>
      <section>
        <h2>Ingredientes</h2>
        <div className="steps-inputs">
          { arrayOfIngredients.map((ingredient, i) => (
            <label
              htmlFor={ ingredient }
              key={ `${ingredient}-${i}` }
            >
              <input
                id={ ingredient }
                type="checkbox"
                data-testid={ `${i}-ingredient-step` }
              />
              {`${arrayOfIngredients[i]} - ${arrayOfMeasures[i]}`}
            </label>
          ))}
        </div>
      </section>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{meals[0].strInstructions}</p>
      </section>
      <button data-testid="finish-recipe-btn" type="button">Finalizar Receita</button>
    </div>
  );
}

export default InProgressFood;
