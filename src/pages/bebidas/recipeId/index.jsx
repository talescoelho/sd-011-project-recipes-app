import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import fetchDetails from '../../../services/fetchDetailsApi';

export default function BebidaDetails({ match: { params: { recipeId } } }) {
  console.log('entrou detalhes bebidas');
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const getDetails = await fetchDetails('drink', recipeId);
      console.log(getDetails);
      setDetails(getDetails);
      setIsLoading(false);
    };
    fetchApi();
  }, [recipeId]);

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
      <Container>
        <Container>
          <Row>
            <Col>
              <img
                className="details-picture"
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
        </Container>
        <Container className="details-btn">
          <Row>
            <Col>
              <Button
                variant="primary"
                type="button"
                data-testid="share-btn"
              >
                Compartilhar
              </Button>
            </Col>
            <Col>
              <Button
                variant="danger"
                type="button"
                data-testid="favorite-btn"
              >
                Favoritar
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <p data-testid="recipe-category">
            <span><strong>{ strCategory }</strong></span>
            <span>{ strAlcoholic }</span>
          </p>
        </Container>
        <Container>
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
        </Container>
        <Container>
          <h2>Instruções</h2>
          <p data-testid="instructions">{strInstructions}</p>
        </Container>
        <Container className="details-recomendation" data-testid="0-recomendation-card">
          <h2>Receitas recomendadas</h2>
          <Carousel>
            <Carousel.Item>
              alo alo
            </Carousel.Item>
            <Carousel.Item>
              TESTANDO BARSA
            </Carousel.Item>
          </Carousel>
        </Container>
        <Button
          type="button"
          className="start-btn"
          data-testid="start-recipe-btn"
          variant="success"
        >
          Iniciar Receita
        </Button>
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
