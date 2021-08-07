import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './styles/details.css';
import MyContext from '../context/MyContext';

function DetailHeader() {
  const {
    drinkDetails,
    foodDetails,
    addLocalStore,
    removeLocalStorage,
  } = useContext(MyContext);

  const { pathname } = useLocation();
  const { id } = useParams();

  const [copied, setCopied] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  const shareRecipe = () => {
    copy(`http://localhost:3000${pathname}`);
    setCopied('Link copiado!');
  };

  function setLocalStore() {
    addLocalStore(id, getDrinksDetails, drinkDetails, foodDetails);
    setIsFavorite(true);
  }

  function deleteLocalStore() {
    removeLocalStorage(id);
    setIsFavorite(false);
  }

  useEffect(() => {
    const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setIsFavorite(getRecipes.some((item) => (item.id).includes(id)));
  }, [id]);

  return getDrinksDetails ? (
    <Card>
      <Card.Img
        src={ drinkDetails.strDrinkThumb }
        alt={ drinkDetails.strDrink }
        data-testid="recipe-photo"
      />
      <Card.Body>
        <Card.Title data-testid="recipe-title" className="detail-title">
          { drinkDetails.strDrink}
        </Card.Title>
        <Badge
          bg="info"
          text="dark"
          data-testid="recipe-category"
        >
          {drinkDetails.strAlcoholic}
        </Badge>
      </Card.Body>
      <Button variant="success" type="button" onClick={ () => shareRecipe() }>
        <img data-testid="share-btn" src={ shareIcon } alt="Icon Share" />
      </Button>
      {copied && <p>{copied}</p>}
      <Button
        variant="danger"
        type="button"
        onClick={ () => (isFavorite ? deleteLocalStore() : setLocalStore()) }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Icon Like"
        />
      </Button>
    </Card>
  ) : (
    <Card>
      <Card.Img
        src={ foodDetails.strMealThumb }
        alt={ foodDetails.strMeal }
        data-testid="recipe-photo"
      />
      <Card.Body>
        <Card.Title data-testid="recipe-title" className="detail-title">
          { foodDetails.strMeal}
        </Card.Title>
        <Badge data-testid="recipe-category" className="detail-category">
          {foodDetails.strCategory}
        </Badge>
      </Card.Body>
      <Button variant="success" type="button" onClick={ () => shareRecipe() }>
        <img data-testid="share-btn" src={ shareIcon } alt="Icon Share" />
      </Button>
      {copied && <p>{copied}</p>}
      <Button
        variant="danger"
        type="button"
        onClick={ () => (isFavorite ? deleteLocalStore() : setLocalStore()) }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Icon Like"
        />
      </Button>
    </Card>
  );
}

export default DetailHeader;
