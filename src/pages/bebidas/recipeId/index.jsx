import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Image,
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

export default function BebidaDetails({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRecipeDone, setIsRecipeDone] = useState(false);
  const [startBtnText, setStartBtnText] = useState('Iniciar Receita');

  useEffect(() => {
    const inProgress = retrieveInProgressRecipes();
    const retrievedId = Object.keys(inProgress.cocktails);
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
      const getDetails = await fetchDetails('drink', recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const history = useHistory();

  const handleStartRecipe = () => {
    history.push(`/bebidas/${recipeId}/in-progress`);
  };

  const loading = () => (
    <Container className="d-flex m-auto flex-column justify-content-center">
      <Spinner className="m-auto" animation="border" role="status" />
      <h2 className="m-auto">Loading</h2>
    </Container>
  );

  const pageContent = () => {
    const {
      strDrink,
      strCategory,
      strInstructions,
      strDrinkThumb,
      strAlcoholic,
    } = details;

    return (
      <Container fluid="md" style={ { backgroundColor: '#0fa36b' } } as="main">
        <Row>
          <Col as="figure" className="m-auto" sd="12" md="8" lg="6">
            <Image
              className="my-3 p-3 shadow-lg"
              data-testid="recipe-photo"
              src={ strDrinkThumb }
              alt="Foto da receita em progresso"
              fluid
              thumbnail
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 data-testid="recipe-title">{ strDrink }</h1>
          </Col>
        </Row>
        <Row as="nav" className="mb-3 m-auto justify-content-center">
          <Col className="col-12 d-flex justify-content-center">
            <CopyButton
              testId="share-btn"
              id={ recipeId }
              selector="bebida"
            />
            <FavoriteButton recipeId={ recipeId } selector="drink" details={ details } />
          </Col>
        </Row>
        <Row
          data-testid="recipe-category"
          className="mt-3 text-center justify-content-center"
        >
          <Col className="col-6">
            <p>
              <strong>{ strCategory }</strong>
            </p>
          </Col>
          <Col className="col-6">
            <p className="">{ strAlcoholic }</p>
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
                      { details[`strMeasure${index + 1}`] || '' }
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
        <Row>
          <Col className="col-12">
            <h3>Receitas recomendadas</h3>
          </Col>
        </Row>
        <Row className="mb-5">
          <DetailsCarousel selector="drink" />
        </Row>
        <Row>
          <Col className="col-12 m-auto">
            { !isRecipeDone
              && (
                <Button
                  type="button"
                  className="fixed-bottom jusitfy-content-center m-auto"
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

BebidaDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
