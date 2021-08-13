import React from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import SharedButton from '../components/SharedButton';
import FavoriteButton from '../components/FavoriteButton';

function ReceitasFavoritas() {
  const favoritedRecipesList = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [favoriteList, setFavoriteList] = React.useState(favoritedRecipesList);
  function filterOnlyMeal() {
    const onlyMealList = favoritedRecipesList
      .filter((recipe) => recipe.type === 'comida');
    setFavoriteList(onlyMealList);
  }

  function filterOnlyDrink() {
    const onlyDrinkList = favoritedRecipesList
      .filter((recipe) => recipe.type === 'bebida');
    setFavoriteList(onlyDrinkList);
  }

  function clearAllFilters() {
    setFavoriteList(favoritedRecipesList);
  }

  function findFavoriteRecipeDoneDate(favoriteMealId) {
    const doneRecipeList = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipeList) {
      const favoritedAndDoneRecipe = doneRecipeList
        .find((recipe) => JSON.stringify(recipe.id) === favoriteMealId);
      if (favoritedAndDoneRecipe) {
        return favoritedAndDoneRecipe.doneDate;
      } return '';
    } return '';
  }

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => clearAllFilters() }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterOnlyMeal() }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterOnlyDrink() }
      >
        Drinks
      </button>

      {favoriteList
        .map(({ id, name, category, image, type, area, alcoholicOrNot }, index) => (
          <>
            <FavoriteRecipeCard
              id={ id }
              type={ type }
              imageDataTestId={ `${index}-horizontal-image` }
              categoryDataTestId={ `${index}-horizontal-top-text` }
              nameDataTestId={ `${index}-horizontal-name` }
              recipeDoneDateDataTestId={ `${index}-horizontal-done-date` }
              image={ image }
              category={ category }
              name={ name }
              area={ area }
              alcoholicOrNot={ alcoholicOrNot }
              recipeDoneDate={ findFavoriteRecipeDoneDate(id) }
            />
            <SharedButton path={ `http://localhost:3000/${type}s/${id}` } dataTest={ `${index}-horizontal-share-btn` } />
            <FavoriteButton
              id={ id }
              reload
              dataTest={ `${index}-horizontal-favorite-btn` }
            />
          </>
        ))}
    </div>
  );
}

export default ReceitasFavoritas;
