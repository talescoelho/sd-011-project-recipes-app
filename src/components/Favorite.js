import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavBtnFavoritePage';
import ShareBtnFav from './ShareBtnFav';

function Favorite(typeFilter) {
  const [copyMessage, setCopyMessage] = useState(false);
  const handleClick = () => {
    setCopyMessage(true);
  };

  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (Local) {
      return Local.filter(({ type }) => type === typeFilter).map((item, index) => (
        <div key={ index }>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            { item.type === 'bebida'
              ? `${item.alcoholicOrNot}` : `${item.area} - ${item.category}`}
          </span>
          <Link to={ `/${item.type}s/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>
              {' '}
              {item.name}
            </h2>
          </Link>
          <Link to={ `/${item.type}s/${item.id}` }>
            <img
              src={ item.image }
              alt={ item.name }
              style={ { width: ' 30%', height: '50%' } }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>

          <Link to="/receitas-favoritas">
            {FavoriteButton(item.id, index)}
          </Link>
          <div>
            <button onClick={ handleClick } type="button">
              {ShareBtnFav(`${item.type}s/${item.id}`, index)}
            </button>
          </div>
          {copyMessage && <p>Link copiado!</p>}
        </div>));
    }
  };
  return (
    <>
      {getFavoriteLocalStorage()}
    </>
  );
}

export default Favorite;
