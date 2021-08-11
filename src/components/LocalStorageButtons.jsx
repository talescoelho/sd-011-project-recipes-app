import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import '../styles/carousel.css';
// import FavoriteButton from './FavoriteButton';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function LocalStorageButtons({ doneRecipes }) {
  const [local, setLocal] = useState([]);
  const [filter, setFilter] = useState('all');

  const done = JSON.parse(localStorage.getItem('doneRecipes'));
  const fave = JSON.parse(localStorage.getItem('favoriteRecipes'));

  function handleClick(e) {
    if (doneRecipes) {
      setLocal(done);
      setFilter(e.target.value);
    } else {
      setLocal(fave);
      setFilter(e.target.value);
    }
    setLocal(local);
  }

  console.log('filter', local);
  useEffect(() => {
    if (doneRecipes) {
      setLocal(done);
    } else {
      setLocal(fave);
    }
  }, []);
  /*   const localFav = localStorage.getItem('favoriteRecipes');
  const favRec = JSON.parse(localFav);
  console.log(favRec);
  const hasId = localFav && Object.keys(favRec)
    .map((el) => favRec[el].id).some((x) => x === id);

    console.log(hasId);
 */
  function renderRecipes(item, index) {
    const localFav = localStorage.getItem('favoriteRecipes');
    const favRec = JSON.parse(localFav);
    console.log(favRec);
    const hasId = localFav && Object.keys(favRec)
      .map((el) => favRec[el].id).some((x) => x === item.id);

    // console.log(hasId);
    return (
      <div key={ index }>
        <Link
          to={
            item.type === 'comida'
              ? `/comidas/${item.id}`
              : `/bebidas/${item.id}`
          }
        >
          <img
            className="visible"
            data-testid={ `${index}-horizontal-image` }
            alt="image_of_recipe"
            src={ item.image }
            // Timed out retrying: cy.click() failed because the center of this element is hidden from view: -> https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Visibility
          />
        </Link>
        <h3 data-testid={ `${index}-horizontal-top-text` }>
          {item.type === 'comida'
            ? `${item.area} - ${item.category}` : item.alcoholicOrNot}
        </h3>
        <Link
          to={
            item.type === 'comida'
              ? `/comidas/${item.id}`
              : `/bebidas/${item.id}`
          }
        >
          <h2 data-testid={ `${index}-horizontal-name` }>
            {item.name}
          </h2>
        </Link>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {`Feita em: ${item.doneDate}`}
        </p>
        <ShareButton
          index={ index }
          foodOrDrink={ item.type === 'comida' ? 'comidas' : 'bebidas' }
          id={ item.id }
        />
        <button
          type="button"
          // onClick={ () => handleFavorite() }
          data-testid={ `${index}-horizontal-favorite-btn` }
        >
          <img
            data-testid="favorite-btn"
            src={ hasId ? blackHeartIcon : whiteHeartIcon }
            alt="Imagem do ícone de favorito"
          />
        </button>
        {/* {!doneRecipes ? <FavoriteButton
          index={ index }
          foodOrDrink={ item.type === 'comida' ? 'comidas' : 'bebidas' }
          id={ item.id }
          type={ item.type }
        /> : null} */}
        {item.tags && item.tags
          .map((_, i) => (
            <p key={ i } data-testid={ `${index}-${item.tags[i]}-horizontal-tag` }>
              {item.tags[i]}
            </p>))}
      </div>
    );
  }

  return (
    <>
      <section>
        <button
          type="button"
          value="all"
          onClick={ (e) => { handleClick(e); } }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          value="comida"
          onClick={ (e) => { handleClick(e); } }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          value="bebida"
          onClick={ (e) => { handleClick(e); } }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      { local && local
        .filter((item) => (filter !== 'all' ? filter === item.type : local))
        .map((renderRecipes))}
    </>
  );
}

LocalStorageButtons.propTypes = {
  doneRecipes: PropTypes.bool,
};

LocalStorageButtons.defaultProps = {
  doneRecipes: false,
};

export default LocalStorageButtons;
