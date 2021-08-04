import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../../globalComponents/Header';
import shareIcon from '../../images/shareIcon.svg';

function ReceitasFeitas({ match }) {
  ReceitasFeitas.displayName = 'Receitas Feitas';
  const [typeToRender, setTypeToRender] = useState('All');
  const [copied, setCopied] = useState(false);

  const saveTypeToRender = (event) => {
    const { value } = event.target;
    if (value === 'All') setTypeToRender(value);
    if (value === 'Food') setTypeToRender('comida');
    if (value === 'Drinks') setTypeToRender('bebida');
  };

  const renderFilterButtons = () => {
    const buttons = ['All', 'Food', 'Drinks'];
    const dataTest = ['filter-by-all-btn', 'filter-by-food-btn', 'filter-by-drink-btn'];
    return (
      <div>
        {buttons.map((button, index) => (
          <button
            type="button"
            key={ index }
            value={ button }
            data-testid={ dataTest[index] }
            onClick={ (event) => saveTypeToRender(event) }
          >
            {button}
          </button>
        ))}
      </div>);
  };

  const shareButtonHandle = () => {
    setCopied(true);
    const mSeconds = 2000;
    copy(window.location.href);
    setTimeout(() => {
      setCopied(false);
    }, mSeconds);
  };

  const doneRecipesExists = (recipesToRender) => {
    const alterURL = {
      comida: 'comidas',
      bebida: 'bebidas',
    };
    return (
      <div>
        {recipesToRender && recipesToRender.map((recipe, index) => (
          <div key={ recipe.id }>
            <Link
              to={ `/${alterURL[recipe.type]}/${recipe.id}` }
            >
              <img
                width="300px"
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            {recipe.type === 'comida'
              ? (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${recipe.area} - ${recipe.category}`}
                </p>)
              : (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${recipe.alcoholicOrNot}`}
                </p>)}
            <button type="button" onClick={ () => shareButtonHandle() }>
              <img
                src={ shareIcon }
                alt="shareIcon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            <p className={ copied }>Link copiado!</p>
            <Link
              to={ `/${alterURL[recipe.type]}/${recipe.id}` }
              data-testid={ `${index}-horizontal-name` }
            >
              {recipe.name}
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
            <p>
              {recipe.tags && recipe.tags.map((tag, indexIn) => (
                <div
                  key={ indexIn }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </div>
              ))}

            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderDoneRecipes = () => {
    if (localStorage.getItem('doneRecipes')) {
      const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
      let recipesToRender = doneRecipes;
      console.log(recipesToRender);
      if (typeToRender !== 'All') {
        recipesToRender = doneRecipes.filter((recipe) => recipe.type === typeToRender);
      }
      return (
        <div>
          { recipesToRender ? doneRecipesExists(recipesToRender) : <h1>Carregando</h1> }
        </div>);
    }
    return (
      <div>
        <h2>Não há receitas Feitas</h2>
      </div>
    );
  };

  return (
    <div>
      <header>
        <Header title="Receitas Feitas" match={ match } />
      </header>
      <body>
        { renderFilterButtons() }
        { renderDoneRecipes() }
      </body>
    </div>
  );
}

ReceitasFeitas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ReceitasFeitas;
