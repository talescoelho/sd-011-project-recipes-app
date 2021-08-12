import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import ShareButton from './ShareButton';
import '../styles/carousel.css';
// import FavoriteButton from './FavoriteButton';
import renderFaveRecipes from '../helper/FavFunction';
import renderDoneRecipes from '../helper/DoneFunction';

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
  }, [fave]);

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
        .map((doneRecipes ? renderDoneRecipes : renderFaveRecipes))}
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
