import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { fetchDetails, fetchRecomendation } from '../../../services/fetchDetailsApi';
import './styles.css';

export default function ComidaDetails({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    const fetchRecomendations = async () => {
      const getRecomendations = await fetchRecomendation('meal');
      setRecomendations(getRecomendations);
      console.log(getRecomendations);
    };
    fetchRecomendations();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails('meal', recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const loading = () => <h1>Loading content...</h1>;

  const pageContent = () => {
    const {
      strMeal,
      strCategory,
      strInstructions,
      strMealThumb,
      strYoutube,
    } = details;

    return (
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
        <div className="details-recomendation">
          <h2>Receitas recomendadas</h2>
          <Carousel variant="dark" data-testid="recomendation-card">
            {
              recomendations.map(({ strDrink, strDrinkThumb }, index) => (
                <Carousel.Item
                  data-testid={ `${index}-recomendation-card` }
                  key={ strDrink }
                >

                  <img
                    className="recomendation-picture"
                    src={ strDrinkThumb }
                    alt="Imagem"
                  />
                  <Carousel.Caption data-testid={ `${index}-recomendation-title` }>
                    <h3>{strDrink}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
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
  };

  return (
    isLoading ? loading() : pageContent()
  );
}

ComidaDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
