import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

export default function FavoriteRecipes() {
  function getFavorites() {
    const favoritesList = localStorage.getItem('favoriteRecipes');
    const json = JSON.parse(favoritesList);
    return json;
  }

  const [favorites, setFavorites] = useState(getFavorites);

  function removeLocalStorage(id) {
    let favs = localStorage.getItem('favoriteRecipes');
    const json = JSON.parse(favs);

    const newjson = json.filter((recipe) => recipe.id !== id);

    favs = JSON.stringify(newjson);
    localStorage.setItem('favoriteRecipes', favs);

    setFavorites(getFavorites());
  }

  function filterBy({ target: { value } }) {
    const filteredFavorites = value === 'all'
      ? getFavorites()
      : favorites.filter(
        ({ type }) => type === value,
      );
    setFavorites(filteredFavorites);
  }

  return (
    <main>
      <Header title="Receitas Favoritas" disable />
      <ButtonGroup>
        <Button
          type="button"
          value="all"
          onClick={ (e) => filterBy(e) }
          data-testid="filter-by-all-btn"
        >
          All
        </Button>

        <Button
          type="button"
          value="comida"
          onClick={ (e) => filterBy(e) }
          data-testid="filter-by-food-btn"
        >
          Comidas
        </Button>

        <Button
          type="button"
          value="bebida"
          onClick={ (e) => filterBy(e) }
          data-testid="filter-by-drink-btn"
        >
          Bebidas
        </Button>
      </ButtonGroup>
      {
        favorites.length > 0
        && favorites.map(
          (favorite, index) => (<RecipeCard
            key={ favorite.id }
            product={ favorite }
            onClickHearth={ () => removeLocalStorage(favorite.id) }
            index={ index }
          />),
        )
      }
    </main>
  );
}
