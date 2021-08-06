import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import '../styles/DoneRecipes.css';
import BtnFilters from '../components/BtnFilters';
import { getStorage } from '../helpers/Storage';

function DoneRecipes() {
  const recipesDone = getStorage('doneRecipes');

  const [linkCopied, setLinkCopied] = useState('');
  const [doneRecipes] = useState(recipesDone);
  console.log(doneRecipes);

  function copyUrlToClipboard() {
    const { type, id } = doneRecipes[0];
    setLinkCopied('Link copiado!');
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
  }

  function mealInfo(index, category, area) {
    return (
      <p
        className="done-category"
        data-testid={ `${index}-horizontal-top-text` }
      >
        {`${area} - ${category}`}
      </p>
    );
  }

  function drinkInfo(index, alcoholicOrNot) {
    return (
      <p
        className="done-category"
        data-testid={ `${index}-horizontal-top-text` }
      >
        {`${alcoholicOrNot}`}
      </p>
    );
  }

  return (
    <>
      <Header />
      <BtnFilters />
      <section className="done-recipes-container">
        { recipesDone.map((
          { category,
            id, type, doneDate, tags, image, area, alcoholicOrNot, name }, index,
        ) => (
          <div
            className="done-recipe-cards"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <Link to={ `/${type}s/${id}` }>
              <img
                className="recipe-image"
                data-testid={ `${index}-horizontal-image` }
                src={ image }
                alt={ name }
              />
            </Link>
            <div className="infos">
              {type === 'comida' ? mealInfo(index, category, area)
                : drinkInfo(index, alcoholicOrNot)}
              <Link to={ `/${type}s/${id}` }>
                <p className="name" data-testid={ `${index}-horizontal-name` }>
                  {name}
                </p>
                <p className="date" data-testid={ `${index}-horizontal-done-date` }>
                  Feita em:
                  {doneDate}
                </p>
                <div className="done-tags">
                  {tags.map((tag) => (
                    <p
                      className="tag"
                      key={ tag }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </p>

                  ))}
                </div>
              </Link>
            </div>
            {linkCopied}
            <button
              type="button"
              className="share"
              data-testid="share-btn"
              onClick={ () => copyUrlToClipboard() }
            >
              <img
                src={ shareIcon }
                alt="share-icon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default DoneRecipes;
