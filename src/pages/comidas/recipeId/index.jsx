import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { fetchDetails } from '../../../services/fetchDetailsApi';
import {
  retrieveDoneRecipes,
  retrieveInProgressRecipes,
} from '../../../services/handleLocalStorage';
import DetailsCarousel from '../../../components/Details/Carousel';
import FavoriteButton from '../../../components/Details/FavoriteButton';
import CopyButton from '../../../components/Details/CopyButton';
import './styles.css';

export default function ComidaDetails({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRecipeDone, setIsRecipeDone] = useState(false);
  const [startBtnText, setStartBtnText] = useState('Iniciar Receita');

  useEffect(() => {
    const inProgress = retrieveInProgressRecipes();
    const retrievedId = Object.keys(inProgress.meals);
    if (retrievedId.includes(recipeId)) {
      setStartBtnText('Continuar Receita');
    }
  }, [recipeId]);

  useEffect(() => {
    const storage = retrieveDoneRecipes();
    storage.forEach((obj) => {
      if (obj.id.includes(recipeId)) {
        setIsRecipeDone(true);
      }
    });
  }, [recipeId]);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails('meal', recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const history = useHistory();

  const handleStartRecipe = () => {
    history.push(`/comidas/${recipeId}/in-progress`);
  };

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
      <Container style={ { backgroundColor: '#0fa36b' } } as="main">
        <Row>
          <Col as="figure" className="justify-content-center">
            <img
              className="w-100 p-4"
              src={ strMealThumb }
              alt="Imagem"
              data-testid="recipe-photo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 data-testid="recipe-title">{ strMeal }</h1>
          </Col>
        </Row>
        <Row as="nav" className="mb-3 m-auto">
          <Col className="col-6">
            <CopyButton />
          </Col>
          <Col className="col-6">
            <FavoriteButton recipeId={ recipeId } selector="meal" details={ details } />
          </Col>
        </Row>
        <Row className="mt-3 text-center justify-content-center">
          <Col className="col-12">
            <p data-testid="recipe-category">
              <strong>{ strCategory }</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <h2>Ingredientes</h2>
          </Col>
          <ul>
            {
              Object.keys(details)
                .filter((key) => key.includes('strIngredient'))
                .map((key, index) => (
                  <Col className="col-12" key={ index }>
                    <li
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { details[key] }
                      :
                      { details[`strMeasure${index + 1}`] }
                    </li>
                  </Col>
                ))
            }
          </ul>
        </Row>
        <Row>
          <Col className="col-12">
            <h2>Instruções</h2>
          </Col>
          <Col className="col-12">
            <p className="text-justify" data-testid="instructions">{strInstructions}</p>
          </Col>
        </Row>
        <Row data-testid="video">
          <Col className="col-12">
            <h2>VIDEO</h2>
          </Col>
          <Col className="col-12">
            <iframe
              title="Recipe video"
              width="320"
              height="215"
              src={ `https://www.youtube.com/embed/${strYoutube.split('watch?v=')[1]}` }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Receitas recomendadas</h2>
          </Col>
        </Row>
        <Row className="mb-5 justify-content-center">
          <DetailsCarousel selector="meal" />
        </Row>
        <Row>
          <Col className="col-12">
            { !isRecipeDone
                && (
                  <Button
                    type="button"
                    className="fixed-bottom m-auto"
                    data-testid="start-recipe-btn"
                    variant="success"
                    onClick={ handleStartRecipe }
                  >
                    {startBtnText}
                  </Button>
                )}
          </Col>
        </Row>
      </Container>
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
