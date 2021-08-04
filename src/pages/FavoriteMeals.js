import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavBtnFavoritePage';

function FavoriteMeals() {
  const [favorite, setFavorite] = React.useState([]);

  React.useEffect(() => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorite([...Local]);
  }, [FavoriteButton]);

  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (Local) {
      return Local.map((item, index) => (
        <div key={ index }>
          <span data-testid={ `${index}-horizontal-top-text` }> </span>
          <h2 data-testid={ `${index}-horizontal-name` }>
            {' '}
            {item.name}
          </h2>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <Link to="/receitas-favoritas">
            {FavoriteButton(item.id)}
          </Link>

        </div>));
    }
    return (
      <p>Não tem favorito</p>
    );
  };
  return (
    <div>
      {getFavoriteLocalStorage()}
    </div>
  );
}

export default FavoriteMeals;
