import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/Profile.css';

const copy = require('clipboard-copy');

function RecipesDone() {
  const [click, setClick] = useState(false);
  const {
    recipesDone,
    setFilteredRecipesDone,
    filteredRecipesDone,
  } = useContext(RecipeAppContext);
  const history = useHistory();

  function copyLink(type, id) {
    copy(`http://localhost:3000/${type}s/${id}`);
    setClick(true);
  }

  const filterRecipesDone = ({ target: { name } }) => {
    let filteredRecipes = [];
    switch (name) {
    case 'Food':
      filteredRecipes = recipesDone.filter((recipe) => recipe.type === 'comida');
      break;
    case 'Drink':
      filteredRecipes = recipesDone.filter((recipe) => recipe.type === 'bebida');
      break;
    default:
      filteredRecipes = recipesDone;
    }
    setFilteredRecipesDone(filteredRecipes);
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <div className="favorite-recipes-buttons-container">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          name="All"
          className="favorite-recipes-buttons"
          onClick={ (e) => filterRecipesDone(e) }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          name="Food"
          className="favorite-recipes-buttons"
          onClick={ (e) => filterRecipesDone(e) }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          name="Drink"
          className="favorite-recipes-buttons"
          onClick={ (e) => filterRecipesDone(e) }
        >
          Drinks
        </button>
      </div>

      <br />
      <span>{click ? <p>Link copiado!</p> : <div />}</span>

      <div className="favorite-recipes-container">
        {filteredRecipesDone && filteredRecipesDone.map((recipes, index) => (
          <div key={ index } className="favorite-recipes-cards">
            <input
              type="image"
              data-testid={ `${index}-horizontal-image` }
              src={ recipes.image }
              width="100px"
              height="100px"
              alt={ recipes.name }
              onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
            />

            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
            </p>

            <a
              href={ `/${recipes.type}s/${recipes.id}` }
              data-testid={ `${index}-horizontal-name` }
              className="profile-recipe-name"
            >
              { recipes.name }
            </a>

            <p data-testid={ `${index}-horizontal-done-date` }>{ recipes.doneDate }</p>

            <div className="profile-icons">
              <div>
                {recipes.tags && recipes.tags.map((tag, indexTag) => (
                  <p
                    key={ indexTag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <input
                type="image"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="card da receita"
                onClick={ () => copyLink(recipes.type, recipes.id) }
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecipesDone;
