import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import CarrouselDrinks from './CarrouselDrinks';
import ShareButton from './ShareButton';
import '../../styles/detail-screen.css';
import {
  convertUrlToID,
  manageDetailAPI,
  managePathname } from '../../Helpers/convertUrlToID';
import embedYouTubeVideo from '../../Helpers/embedYouTubeVideo';

function SingleFoodItem() {
  const { id } = useParams();
  const currentStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const history = useHistory();
  const currentURL = window.location.pathname;
  const [itemDetail, setItemDetail] = useState({ meals: null });
  const itemId = convertUrlToID(window.location.pathname);
  const arrayOfIngredients = [];
  const arrayOfMeasures = [];

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);
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
  return itemDetail.meals !== null && (
    <div>
      <h1 data-testid="recipe-title">{meals[0].strMeal}</h1>
      <img
        width="350"
        src={ meals[0].strMealThumb }
        alt={ `Foto da comida chamada ${meals[0].strMeal}` }
        data-testid="recipe-photo"
      />
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <ShareButton />
      <p data-testid="recipe-category">{meals[0].strCategory}</p>
      <section>
        <h2>Ingredientes</h2>
        <table>
          { arrayOfIngredients.map((ingredient, i) => (
            <tr key={ `${ingredient}-${i}` }>
              <th
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                {`${arrayOfIngredients[i]} - ${arrayOfMeasures[i]}`}
              </th>
            </tr>
          ))}
        </table>
      </section>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{meals[0].strInstructions}</p>
      </section>
      <section>
        <h2>Instruções em vídeo</h2>
        <embed data-testid="video" src={ embedYouTubeVideo(meals[0].strYoutube) } />
      </section>
      <CarrouselDrinks />
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-button"
        onClick={ () => history
          .push(`/comidas/${managePathname(currentURL)}/in-progress`) }
      >
        { currentStorage && currentStorage.meals[id] ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </div>
  );
}

export default SingleFoodItem;
