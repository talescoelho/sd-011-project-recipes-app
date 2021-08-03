import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipeAppContext from '../context/RecipeAppContext';

// const copy = require('clipboard-copy');

function FavoriteRecipes() {
  // const [click, setClick] = useState(false);
  // recipesDone,
  // setFilteredRecipesDone,
  const {
    filteredRecipesDone,
  } = useContext(RecipeAppContext);

  // const history = useHistory();

  // function copyLink(type, id) {
  //   copy(`http://localhost:3000/${type}s/${id}`);
  //   setClick(true);
  // }

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1>My Favorite Recipes Page</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>

      <span>
        {filteredRecipesDone && filteredRecipesDone.map((recipes, index) => (
          <div key={ index }>
            <input
              type="image"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="card da receita"
            />
            <ul>
              <input
                type="image"
                data-testid={ `${index}-horizontal-image` }
                src={ recipes.image }
                width="50px"
                height="50px"
                alt={ recipes.name }
              />

              <li data-testid={ `${index}-horizontal-top-text` }>
                {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
              </li>

              <a
                href={ `/${recipes.type}s/${recipes.id}` }
                data-testid={ `${index}-horizontal-name` }
              >
                { recipes.name }
              </a>

              <input
                type="image"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                alt={ recipes.name }
              />

            </ul>
          </div>
        ))}
      </span>

    </div>
  );
}

export default FavoriteRecipes;
