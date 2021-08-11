import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, Badge } from 'react-bootstrap';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './styles/details.css';

function RecipeCard(props) {
  const {
    product: {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    },
    onClickHearth,
    index,
  } = props;

  const [copied, setCopied] = useState('');

  const shareRecipe = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopied('Link copiado!');
  };

  return (

    <Card>
      <Link to={ `/${type}s/${id}` }>
        <Card.Img
          src={ image }
          alt={ `A very Good Looking ${name}` }
          data-testid={ `${index}-horizontal-image` }
        />
        <Card.Body>
          <Card.Title data-testid={ `${index}-horizontal-name` } className="detail-title">
            { name }
          </Card.Title>
          <Badge
            bg="info"
            text="dark"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {
              type === 'bebida'
                ? (`${alcoholicOrNot}`)
                : (`${area} - ${category}`)
            }
          </Badge>
        </Card.Body>
      </Link>
      <Button variant="success" type="button" onClick={ () => shareRecipe() }>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Icon Share"
        />
      </Button>
      {copied && <p>{copied}</p>}
      <Button
        variant="danger"
        type="button"
        onClick={ () => onClickHearth() }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="Icon Like"
        />
      </Button>
    </Card>

  );
}
export default RecipeCard;
RecipeCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.string,
}.isRequired;
