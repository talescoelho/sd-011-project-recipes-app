import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap';
import { fetchDetails } from '../../../../services/fetchDetailsApi';
import FavoriteButton from '../../../../components/Details/FavoriteButton/index';
import CopyButton from '../../../../components/Details/CopyButton/index';

export default function ComidasInProgress({ match: { params: { recipeId } } }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails('meal', recipeId);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

  const loading = () => (
    <Container className="d-flex m-auto flex-column justify-content-center">
      <Spinner className="m-auto" animation="border" role="status" />
      <h2 className="m-auto">Loading</h2>
    </Container>
  );

  const pageContent = () => {
    const {
      strMeal,
      strCategory,
      strInstructions,
      strMealThumb,
    } = details;
    return (
      <Container style={ { backgroundColor: '#0fa36b' } } as="main">
        <Row>
          <Col as="figure" className="col-12">
            <img
              className="w-100 p-4"
              data-testid="recipe-photo"
              src={ strMealThumb }
              alt="Foto da receita em progresso"
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <h1 data-testid="recipe-title">{ strMeal }</h1>
          </Col>
        </Row>
        <Row as="nav" className="mb-3 m-auto justify-content-center">
          <Col className="col-12 d-flex justify-content-center">
            <CopyButton />
            <FavoriteButton recipeId={ recipeId } selector="meal" details={ details } />
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
        </Row>
        <Row>
          <Col className="col-12">
            <h2>Ingredientes</h2>
          </Col>
          {
            Object.keys(details)
              .filter((key) => key.includes('strIngredient'))
              .map((key, index) => (
                <Col key={ index } className="col-12">
                  <Form.Group
                    data-testid={ `${index}-ingredient-step` }
                    className="ml-2 mb-3"
                    controlId={ `item-${index}` }
                  >
                    <Form.Check
                      type="checkbox"
                      label={
                        `${details[key]} : ${details[`strMeasure${index + 1}`]}`
                      }
                    />
                  </Form.Group>
                </Col>
              ))
          }
        </Row>
        <Row>
          <Col className="col-12">
            <h2>Instruções</h2>
          </Col>
          <Col className="col-12">
            <p className="text-justify" data-testid="instructions">{ strInstructions }</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <Button data-testid="finish-recipe-btn">Finalizar Receita</Button>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    isLoading ? loading() : pageContent()
  );
}

ComidasInProgress.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }),
  }).isRequired,
});
