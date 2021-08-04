import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
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
        <Button type="button" data-testid="share-btn">Compartilhar</Button>
        <Button type="button" data-testid="favorite-btn">Favoritar</Button>
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
        src={ `https://www.youtube.com/embed/${strYoutube.split('watch?v=')[1]}` }
      />
      <div className="details-recomendation" data-testid="0-recomendation-card">
        <h2>Receitas recomendadas</h2>
        <Carousel>
          <Carousel.Item>
            alo alo
          </Carousel.Item>
          <Carousel.Item>
            TESTANDO BARSA
          </Carousel.Item>
        </Carousel>
      </div>
      <Button
        type="button"
        className="start-btn"
        data-testid="start-recipe-btn"
        variant="success"
      >
        Iniciar Receita
      </Button>
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
