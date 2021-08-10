import React from 'react';
import { Layout } from '../components';
import { useTheme } from '../hooks';
import doneRecipes from '../helpers/mocks/RecipeMade';
import shareIcon from '../images/shareIcon.svg';

function RecipesMade() {
  const { colors } = useTheme();
  const styles = {
    main: {
      backgroundColor: colors.background,
      color: colors.text400,
    },
  };

  return (
    <Layout title="Receitas Feitas" noFooter>
      <main style={ styles.main }>

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
        <ul>
          {doneRecipes.map((recipes, index) => (
            <li key={ recipes.id }>
              <img
                alt={ recipes.name }
                data-testid={ `${index}-horizontal-image` }
                src={ recipes.image }
              />
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${recipes.area || recipes.alcoholicOrNot} - ${recipes.category}` }
              </h3>
              <h2
                data-testid={ `${index}-horizontal-name` }
              >
                { recipes.name }
              </h2>
              <h2
                data-testid={ `${index}-horizontal-done-date` }
              >
                { recipes.doneDate }
              </h2>
              <input
                alt="share button"
                type="image"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
              />
              {recipes.tags.map((tags, indextags) => (
                <h3
                  data-testid={ `${index}-${tags}-horizontal-tag` }
                  key={ indextags }
                >
                  { tags }
                </h3>
              ))}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default RecipesMade;
