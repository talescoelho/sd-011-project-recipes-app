import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { fetchDetails, fetchRecomendation } from '../../../services/fetchDetailsApi';
import {
  retrieveDoneRecipes,
  retrieveInProgressRecipes,
} from '../../../services/handleLocalStorage';

export default function BebidaDetails({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
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
    const fetchRecomendations = async () => {
      const getRecomendations = await fetchRecomendation('drink');
      setRecomendations(getRecomendations);
    };
    fetchRecomendations();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails('drink', recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const handleStartRecipe = () => {
    // const {
    //   idDrink,
    //   strDrink,
    //   strCategory,
    //   strTags,
    //   strDrinkThumb,
    //   strAlcoholic,
    // } = details;
    // const timeNow = Date.now();
    // const obj = {
    //   id: idDrink,
    //   type: 'bebida',
    //   area: '',
    //   category: strCategory || '',
    //   alcoholicOrNot: strAlcoholic || '',
    //   name: strDrink,
    //   image: strDrinkThumb,
    //   doneDate: timeNow,
    //   tags: strTags ? strTags.split(',') : [],
    // };
    // saveNewDoneRecipe(obj);
  };

  const loading = () => <h1>Loading content...</h1>;

  const pageContent = () => {
    const {
      strDrink,
      strCategory,
      strInstructions,
      strDrinkThumb,
      strAlcoholic,
    } = details;

    return (
      <Container style={ { backgroundColor: '#0fa36b' } } as="main">
        <Row>
          <Col as="figure" className="justify-content-center">
            <img
              className="w-100 p-4"
              src={ strDrinkThumb }
              alt="Imagem"
              data-testid="recipe-photo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 data-testid="recipe-title">{ strDrink }</h1>
          </Col>
        </Row>
        <Row as="nav" className="mb-3 m-auto">
          <Col className="col-6">
            <Button
              variant="primary"
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </Button>
          </Col>
          <Col className="col-6">
            <Button
              variant="danger"
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </Button>
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
        <Row>
          <Col className="col-12">
            <h2>Receitas recomendadas</h2>
          </Col>
        </Row>
        <Row as="nav">
          <Col className="col-12 mb-5">
            <Carousel className="m-auto w-85" variant="dark">
              {
                recomendations.map(({ strMeal, strMealThumb }, index) => (
                  <Carousel.Item
                    data-testid={ `${index}-recomendation-card` }
                    key={ strMeal }
                  >
                    <img
                      className="recomendation-picture"
                      src={ strMealThumb }
                      alt="Imagem"
                    />
                    <Carousel.Caption data-testid={ `${index}-recomendation-title` }>
                      <h3>{strMeal}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </Col>
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

BebidaDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
