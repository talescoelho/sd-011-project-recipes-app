import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './styles/details.css';
import MyContext from '../context/MyContext';

function RecipeCard(product) {
  const {
    id,
    type,
    area,
    category,
    alcoholicOrNot,
    name,
    image,
  } = product;

  const {
    removeLocalStorage,
  } = useContext(MyContext);

  const { pathname } = useLocation();
  const [copied, setCopied] = useState('');

  const shareRecipe = () => {
    copy(`http://localhost:3000${pathname}`);
    setCopied('Link copiado!');
  };

  return (
    <Card>
      <Card.Img
        src={ image }
        alt={ `A very Good Looking ${name}` }
        data-testid="recipe-photo"
      />
      <Card.Body>
        <Card.Title data-testid="recipe-title" className="detail-title">
          { name }
        </Card.Title>
        <Badge
          bg="info"
          text="dark"
          data-testid="recipe-category"
        >
          {
            type === 'comidas'
              ? (`${alcoholicOrNot}`)
              : (`${category} ${area}`)
          }
        </Badge>
      </Card.Body>
      <Button variant="success" type="button" onClick={ () => shareRecipe() }>
        <img data-testid="share-btn" src={ shareIcon } alt="Icon Share" />
      </Button>
      {copied && <p>{copied}</p>}
      <Button
        variant="danger"
        type="button"
        onClick={ () => removeLocalStorage(id) }
      >
        <img
          data-testid="favorite-btn"
          src={ blackHeartIcon }
          alt="Icon Like"
        />
      </Button>
    </Card>
  );
}
export default RecipeCard;
