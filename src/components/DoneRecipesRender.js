import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneRecipesRender({ filter }) {
  const [copyLink, setCopyLink] = useState(false);
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem('doneRecipes')),
  );

  useEffect(() => {
    const localRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (filter !== '') {
      const newRecipes = localRecipes.filter((recipe) => recipe.type === filter);
      setRecipes(newRecipes);
    } else {
      setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  function copyUrl({ target }) {
    const type = target.dataset.recipetype;
    const TWO_SECONDS = 2000;
    copy(`http://localhost:3000/${type}s/${target.dataset.recipeid}`);
    setCopyLink(true);
    setTimeout(() => {
      setCopyLink(false);
    }, TWO_SECONDS);
  }
  console.log(recipes);
  return (
    <div>
      {copyLink ? <p>Link copiado!</p> : null}
      {recipes.map((recipe, index) => (
        <div key={ index }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <Image
              alt="imagem da receita"
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <div>
            {recipe.tags.map((tag) => (
              <span
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </span>
            ))}
          </div>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <h4 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h4>
          </Link>
          {recipe.type === 'comida'
            ? (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${recipe.area} - ${recipe.category}`}
              </span>
            ) : (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </span>
            )}
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          <input
            data-recipetype={ recipe.type }
            onClick={ (event) => copyUrl(event) }
            data-recipeId={ recipe.id }
            alt="botao de compartilhar"
            type="image"
            src={ shareIcon }
            data-testid={ `${index}-horizontal-share-btn` }
          />
        </div>
      ))}
    </div>
  );
}

export default DoneRecipesRender;
