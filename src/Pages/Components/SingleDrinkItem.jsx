import React, { useEffect, useState } from 'react';
import { convertUrlToID, manageDetailAPI } from '../../Helpers/convertUrlToID';

function SingleFoodItem() {
  const [itemDetail, setItemDetail] = useState({
    drinks: null,
  });

  // const [recomendation, setRecomendation] = useState();
  // const [ingredients, setIngredients] = useState([]);
  // const [measures, setMeasures] = useState([]);

  const itemId = convertUrlToID(window.location.pathname);
  const arrayOfIngredients = [];
  const arrayOfMeasures = [];

  useEffect(() => {
    const FetchDrink = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemId}`);
      const detailRequest = await response.json();
      setItemDetail(manageDetailAPI(detailRequest));
    };
    return FetchDrink();
  }, []);

  // Parte que separa os ingredientes da receitas
  if (itemDetail.drinks !== null) {
    const drink = itemDetail.drinks[0];

    const arrayOfIngredientsKey = Object
      .keys(drink).filter((key) => key.includes('strIngredient'));
    const arrayOfMeasuresKey = Object
      .keys(drink).filter((key) => key.includes('strMeasure'));
    arrayOfIngredientsKey.map((ingredient) => {
      if (drink[ingredient] !== '' && drink[ingredient] !== ' ' && drink[ingredient] !== null) {
        arrayOfIngredients.push(drink[ingredient]);
      }
      return null;
    });
    arrayOfMeasuresKey.map((ingredient) => {
      if (drink[ingredient] !== '' && drink[ingredient] !== ' ' && drink[ingredient] !== null) {
        arrayOfMeasures.push(drink[ingredient]);
      }
      return null;
    });
  }

  // console.log(itemDetail);
  // console.log(arrayOfIngredients);
  // console.log(arrayOfMeasures);
  //

  const { drinks } = itemDetail;
  console.log(drinks);
  return itemDetail.drinks !== null && (
    <div>
      <h1 data-testid="recipe-title">{drinks[0].strDrink}</h1>
      <img
        width="350"
        src={ drinks[0].strDrinkThumb }
        alt={ `Foto da bebida chamada ${drinks[0].strDrink}` }
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-category">{drinks[0].strAlcoholic}</p>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <p data-testid="recipe-category">{drinks[0].strCategory}</p>
      <section>
        <h2>Ingredientes</h2>
        <table>
          { arrayOfIngredients.map((ingred, i) => (
            <tr key={ `${ingred}-${i}` }>
              <th data-testid={ `${i}-ingredient-name-and-measure` }>
                {`${arrayOfIngredients[i]} - ${arrayOfMeasures[i]}`}
              </th>
            </tr>
          ))}
        </table>
      </section>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{drinks[0].strInstructions}</p>
      </section>
      <p data-testid={ `${0}-recomendation-card` }>Recomendação de bebida</p>
      <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
    </div>
  );
}

export default SingleFoodItem;
