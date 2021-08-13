import React, { useContext } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { copyLink } from '../../Services/ApiDrink';
import MainContext from '../../Context/MainContext';

export default function AllDone() {
  const { show, setShow } = useContext(MainContext);

  const storage = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      { storage.map((recipe, index) => (
        <div key={ index }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ `recipe ${recipe.name}` }
              width="80"
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { `${recipe.area} - ${recipe.category}` }
            { recipe.alcoholicOrNot }
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h3>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>
            { recipe.doneDate }
          </p>
          <button
            type="button"
            src="src/images/shareIcon.svg"
            alt="share"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyLink(copy, setShow, `${recipe.type}s`, recipe.id) }
          >
            Compartilhar
          </button>
          <p>{ show && 'Link copiado!'}</p>
          { recipe.tags !== null ? recipe.tags.map((item, i) => (
            <p
              key={ i }
              data-testid={ `${index}-${item}-horizontal-tag` }
            >
              { item }
            </p>
          )) : '' }
        </div>
      )) }
    </div>
  );
}
