import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { convertUrlToID, manageDetailAPI } from '../../Helpers/convertUrlToID';

function SingleFoodItem() {
  const [itemDetail, setItemDetail] = useState({
    meals: null,
  });
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const itemId = convertUrlToID(window.location.pathname);

  useEffect(() => {
    const FetchFood = async () => {
      // https://github.com/axios/axios#axios-api
      const detailRequest = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);
      setItemDetail(manageDetailAPI(detailRequest.data));
    };
    return FetchFood();
  }, []);

  const ingredientsArray = [];
  let measureArray = [];

  if (itemDetail.meals !== null) {
    const { meals } = itemDetail;
    console.log(meals);
    const ingredientTimes = 20;
    for (let i = 0; i < ingredientTimes; i += 1) {
      if (meals[0].strIngredient[i + 1] !== '' || meals[0].strIngredient[i + 1] !== ' ') {
        ingredientsArray.push(meals.strIngredient[i + 1]);
      }
    }
    console.log(ingredientsArray);
  }

  const { meals } = itemDetail;
  return itemDetail.meals !== null ? (
    <div>
      <h1 data-testid="recipe-title">{meals[0].strMeal}</h1>
      <img width="350" src={ meals[0].strMealThumb } alt="Foto comida" data-testid="recipe-photo" />
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <p data-testid="recipe-category">{meals[0].strCategory}</p>
      <section>
        <h2>Ingredientes</h2>
        <table>

          <tr>
            <th>a</th>
            <th>a</th>
          </tr>

        </table>
      </section>
    </div>
  ) : 'Carregando';

  const index = '';

  return (
    <div>
      <p data-testid={ `${index}-ingredient-name-and-measure` }>Ingredientes</p>
      <p data-testid="instructions">Instruções</p>
      {/* <embed data-testid="video" src="https://www.youtube.com/embed/vCgJR840SJM?list=RDMMvCgJR840SJM" /> */}
      <p data-testid={ `${index}-recomendation-card` }>Card de receitas</p>
      <button data-testid="start-recipe-btn" type="button">Iniciar receita</button>
    </div>
  );
}

export default SingleFoodItem;

// SingleFoodItem.propTypes = {
//   history: PropTypes.shape({
//     location: PropTypes.shape({
//       pathname: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
