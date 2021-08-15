import React, { useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const pageTitle = {
    pageName: 'Receitas Feitas',
    setIcon: false,
  };
  const recipeStorages = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const recipeStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(recipeStorage);
  }, []);

  return (
    <div>
      <Header value={ pageTitle } />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setDoneRecipes(recipeStorages) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setDoneRecipes(doneRecipes
            .filter((recipes) => recipes.type === 'comida')) }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setDoneRecipes(doneRecipes
            .filter((recipes) => recipes.type === 'bebida')) }
        >
          Drinks
        </button>
      </div>
      <div>
        {
          doneRecipes.map((recipe, index) => (
            <div key={ index }>
              {recipe.type === 'bebida' ? (
                <div>
                  <Link
                    to={ `/bebidas/${recipe.id}` }
                  >
                    <img
                      src={ recipe.image }
                      alt={ recipe.name }
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </Link>
                  <Link to={ `/bebidas/${recipe.id}` }>
                    <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
                  </Link>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { recipe.alcoholicOrNot }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>
                    Feito em:
                    { recipe.doneDate }
                  </p>
                  <button
                    type="button"
                    onClick={ () => {
                      clipboardCopy(`http://localhost:3000/bebidas/${recipe.id}`);
                      setCopied(true);
                    } }
                  >
                    { copied ? <span>Link copiado!</span> : <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    /> }
                  </button>
                </div>
              ) : (
                <div key={ index }>
                  <Link
                    to={ `/comidas/${recipe.id}` }
                  >
                    <img
                      src={ recipe.image }
                      alt={ recipe.name }
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </Link>
                  <Link to={ `/comidas/${recipe.id}` }>
                    <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
                  </Link>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${recipe.area} - ${recipe.category}` }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>
                    Feito em:
                    { recipe.doneDate }
                  </p>
                  <button
                    type="button"
                    onClick={ () => {
                      clipboardCopy(`http://localhost:3000/comidas/${recipe.id}`);
                      setCopied(true);
                    } }
                  >
                    { copied ? <span>Link copiado!</span> : <img
                      src={ shareIcon }
                      alt="compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                    /> }
                  </button>
                  {
                    recipe.tags.map((tag, idx) => (
                      <p
                        key={ idx }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        { tag }
                      </p>
                    ))
                  }
                </div>
              ) }
            </div>
          ))
        }
      </div>
    </div>
  );
}
