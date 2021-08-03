import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchDetails from '../../../services/fetchMealDetailsApi';
import './styles.css';

export default function ComidasRecipeId({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails(recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = details;
  console.log(strYoutube);
  const ytUrl = '0' || strYoutube.split('watch?v=')[1];

  const loading = () => <h1>Loading content...</h1>;

  const pageContent = () => (
    <div className="details">
      <img
        className="details-picture"
        src={ strMealThumb }
        alt="Imagem"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ strMeal }</h1>
      <div className="details-btn">
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
      </div>
      <p>
        Categoria
        <span data-testid="recipe-category"><strong>{ strCategory }</strong></span>
      </p>
      <div>
        <h2>Ingredientes</h2>
        <ul>
          {
            Object.keys(details)
              .filter((key) => key.includes('strIngredient'))
              .map((key, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  { details[key] }
                  :
                  { details[`strMeasure${index + 1}`] }
                </li>
              ))
          }
        </ul>
      </div>
      <p data-testid="instructions">{strInstructions}</p>
      <div data-testid="video">VIDEO</div>
      <iframe
        title="Recipe video"
        width="320"
        height="215"
        src={ `https://www.youtube.com/embed/${ytUrl}` }
      />
      <div data-testid={ `${recipeId}-recomendation-card` }>Receitas recomendadas</div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );

  const content = isLoading ? loading() : pageContent();
  return (
    content
  );
}

ComidasRecipeId.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
