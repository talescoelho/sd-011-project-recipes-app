import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../styles/doneRecipes.css';

const DoneRecipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [filteredRecipes, setFilteredRecipe] = React.useState([]);
  const [messageClipboard, setMessageClipboard] = React.useState(null);
  const [indexOfMessageClipboard, setIndexOfMessageClipboard] = React.useState(null);

  React.useEffect(() => {
    const doneRecipes = localStorage.getItem('doneRecipes');
    if (doneRecipes) {
      setRecipes(JSON.parse(doneRecipes));
      setFilteredRecipe(JSON.parse(doneRecipes));
    }
  }, []);

  function handleClickBtnFilters({ target: { value } }) {
    if (value === 'comida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'comida'));
    } else if (value === 'bebida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'bebida'));
    } else {
      setFilteredRecipe(recipes);
    }
  }

  function handleClick(index, type, id) {
    const url = window.location.href.split('/receitas-feitas')[0];
    navigator.clipboard.writeText(`${url}/${type}s/${id}`);
    setMessageClipboard('Link copiado!');
    setIndexOfMessageClipboard(index);
    const time = 3000;
    setTimeout(() => {
      setMessageClipboard(null);
      setMessageClipboard(null);
    }, time);
  }

  return (
    <div>
      <button
        type="button"
        value="all"
        data-testid="filter-by-all-btn"
        onClick={ handleClickBtnFilters }
      >
        All
      </button>
      <button
        type="button"
        value="comida"
        data-testid="filter-by-food-btn"
        onClick={ handleClickBtnFilters }
      >
        Food
      </button>
      <button
        type="button"
        value="bebida"
        data-testid="filter-by-drink-btn"
        onClick={ handleClickBtnFilters }
      >
        Drinks
      </button>
      <div>
        {filteredRecipes.map((recipe, index) => {
          const {
            image,
            type,
            id, category, name, area, alcoholicOrNot, doneDate, tags } = recipe;
          console.log(doneDate, tags);
          return (
            <div key={ id } className="recipe-card">
              <Link to={ `/${type}s/${id}` }>
                <img
                  className="recipe-img"
                  src={ image }
                  alt=""
                  data-testid={ `${index}-horizontal-image` }
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
              </Link>
              {area ? (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${area} - ${category}` }
                </p>
              ) : (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { alcoholicOrNot }
                </p>
              )}
              <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
              <button type="button" onClick={ () => handleClick(index, type, id) }>
                <img
                  src={ shareIcon }
                  alt=""
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
              {index === indexOfMessageClipboard && <p>{messageClipboard}</p>}
              {tags.length > 0 && tags.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoneRecipes;
