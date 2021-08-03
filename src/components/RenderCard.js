import React from 'react';
import Image from 'react-bootstrap/Image';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RenderCard({ recipes }) {
  // eslint-disable-next-line global-require
  const copy = require('clipboard-copy');
  function copyUrl({ target }) {
    const type = target.dataset.recipetype;
    copy(`http://localhost:3000/${type}s/${target.dataset.recipeid}`);
    alert('Link copiado!');
  }
  return (
    <div>
      {recipes.map((object, index) => (
        <div key={ object.id }>
          <Image
            thumbnail
            alt="imagem da receita"
            src={ object.image }
            data-testid={ `${index}-horizontal-image` }
          />
          {object.type === 'comida'
            ? (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${object.area} - ${object.category}`}
              </span>
            ) : (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {object.alcoholicOrNot}
              </span>
            )}
          <h4 data-testid={ `${index}-horizontal-name` }>{object.name}</h4>
          <input
            data-recipetype={ object.type }
            onClick={ (event) => copyUrl(event) }
            data-recipeId={ object.id }
            alt="botao de compartilhar"
            type="image"
            src={ shareIcon }
            data-testid={ `${index}-horizontal-share-btn` }
          />
          <input
            data-recipeIndex={ index }
            alt="botao de favoritar"
            type="image"
            src={ blackHeartIcon }
            data-testid={ `${index}-horizontal-favorite-btn` }
          />
        </div>
      ))}
    </div>
  );
}

export default RenderCard;
