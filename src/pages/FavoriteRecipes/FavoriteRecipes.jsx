import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../../globalComponents/Header';
import shareIcon from '../../images/shareIcon.svg';

function FavoriteRecipes({ match }) {
  const [copied, setCopied] = React.useState(false);
  const [typeToRender, setTypeToRender] = React.useState('All');
  const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

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

  const shareButtonHandle = (id, type) => {
    setCopied(true);
    const mSeconds = 2000;
    if (type === 'comida') {
      copy(`http://localhost:3000/comidas/${id}`);
    } else {
      copy(`http://localhost:3000/bebidas/${id}`);
    }
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
      <section>
        {recipesToRender && recipesToRender.map((recipe, index) => (
          <div key={ recipe.id }>
            <div>
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
              <button
                type="button"
                onClick={ () => shareButtonHandle(recipe.id, recipe.type) }
              >
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
          </div>
        ))}
      </section>
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
    <>
      <Header title="Receitas Favoritas" match={ match } />
      {renderFilterButtons()}
      { renderDoneRecipes() }
      <div>
        {favoriteStorage && favoriteStorage.map((storage, index) => (
          <div key={ index }>
            <Link to={ `/${storage.type}s/${storage.id}` }>
              <img
                style={ { width: '200px' } }
                src={ storage.image }
                alt="imagem da receita"
                data-testid={ `${index}-horizontal-image` }
              />
              {storage.area && <p>{ `${storage.area}-${storage.category}`}</p>}
              {!storage.area && <p>{ `${storage.category}`}</p>}
              <h2 data-testid={ `${index}-horizontal-name` }>{ storage.name }</h2>
            </Link>
            <button
              type="button"
              onClick={ () => shareButtonHandle(storage.id, storage.type) }
            >
              <img
                src={ shareIcon }
                alt="shareIcon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            {copied ? <p>Link copiado!</p> : null}
          </div>
        ))}
      </div>
    </>
  );
}

FavoriteRecipes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FavoriteRecipes;
