import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card,
  Button,
  Badge,
  Container,
} from 'react-bootstrap';
import copy from 'clipboard-copy';
import MyContext from '../context/MyContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import handleClickCheckbox from '../helpers/handleClickCheckbox';
import '../components/styles/details.css';

export default function ProgressFoodRecipe(props) {
  const {
    drinkDetails,
    foodDetails,
    addLocalStore,
    getFoodById,
    removeLocalStorage,
    setFoodDetails,
  } = useContext(MyContext);
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState('');
  const [disable, setDisable] = useState(true);
  const { history } = props;
  const { location } = history;
  const { pathname } = location;
  const toShare = pathname.replace('/in-progress', '');
  const id = pathname.split('/')[2];
  const [inProgress, setInProgress] = useState({ cocktails: {}, meals: {} });

  useEffect(() => {
    const foodId = async () => {
      setData(await getFoodById(id));
      setFoodDetails(data);
    };
    foodId();
  }, [setFoodDetails, data, getFoodById, id]);

  const ingredientes = (!data.length) ? ''
    : Object.keys(data[0])
      .filter((ingredient) => ingredient.includes('strIngredient'))
      .map((element) => data[0][element])
      .filter((value) => value);

  useEffect(() => {
    const getLocalProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localStorage.inProgressRecipes) {
      setInProgress(getLocalProgress);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    function finishRecipe() {
      if (inProgress.meals[id] && inProgress.meals[id].length === ingredientes.length) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
    finishRecipe();
  }, [inProgress, id, ingredientes]);

  function handleShared() {
    copy(`http://localhost:3000${toShare}`);
    setCopied('Link copiado!');
  }

  function deleteLocalStore() {
    removeLocalStorage(id);
    setFavorite(false);
  }

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  function setLocalStore() {
    addLocalStore(id, getDrinksDetails, drinkDetails, foodDetails[0]);
    setFavorite(true);
  }

  useEffect(() => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorite(getRecipes.some((item) => (item.id).includes(id)));
  }, [id]);

  const paramFunction = {
    inProgress, setInProgress, id, type: 'meals',
  };

  if (!data.length) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <Card>
        <Card.Img
          data-testid="recipe-photo"
          src={ data[0].strMealThumb }
          alt="foto da comida"
        />
        <Card.Body>
          <Card.Title
            className="detail-title"
            data-testid="recipe-title"
          >
            {data[0].strMeal}
          </Card.Title>
          <Badge
            bg="info"
            text="dark"
            data-testid="recipe-category"
          >
            {' '}
            {data[0].strCategory}
          </Badge>
        </Card.Body>
        <Button
          variant="success"
          type="button"
          data-testid="share-btn"
          onClick={ handleShared }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </Button>
        {copied && <p>{ copied }</p>}
        <Button
          variant="danger"
          type="button"
          onClick={ () => (!favorite ? setLocalStore() : deleteLocalStore()) }
        >
          <img
            src={ !favorite ? whiteHeartIcon : blackHeartIcon }
            data-testid="favorite-btn"
            alt="favoritar"
          />

        </Button>
        <Card.Title>Ingredientes</Card.Title>
        {ingredientes.map((item, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <label
              htmlFor={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ `${index}-ingredient-step` }
                onClick={ (e) => handleClickCheckbox(e, item, paramFunction) }
                checked={ inProgress.meals[id] && inProgress.meals[id]
                  .includes(item) }
              />
              {' '}
              { item }
            </label>
          </div>
        ))}
        <Card style={ { padding: '10px' } }>
          <Card.Title>Instructions</Card.Title>
          <Card.Text data-testid="instructions">
            {
              data[0].strInstructions
            }

          </Card.Text>
        </Card>
      </Card>
      <Link to="/receitas-feitas">
        <Button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ disable }
        >
          Finalizar Receita
        </Button>
      </Link>
    </Container>
  );
}

ProgressFoodRecipe.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.shape({
        split: PropTypes.func,
      }),
    }),
  }),
}.isRequired;
