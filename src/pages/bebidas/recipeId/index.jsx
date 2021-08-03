import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import fetchDetails from '../../../services/fetchDrinkDetailsApi';
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
    strDrink,
    strCategory,
    strInstructions,
    strDrinkThumb,
    strAlcoholic,
  } = details;

  const loading = () => <h1>Loading content...</h1>;

  const pageContent = () => (
    <div className="details">
      <div>
        <img
          className="details-picture"
          src={ strDrinkThumb }
          alt="Imagem"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ strDrink }</h1>
      </div>
      <div className="details-btn">
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
      </div>
      <p data-testid="recipe-category">
        <span><strong>{ strCategory }</strong></span>
        <span>{ strAlcoholic }</span>
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
      <button
        type="button"
        className="start-btn"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );

  return (
    isLoading ? loading() : pageContent()
  );
}

ComidasRecipeId.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
