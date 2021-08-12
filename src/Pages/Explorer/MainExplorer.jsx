import React from 'react';
import PropTypes from 'prop-types';
import HeaderExplore from '../../Components/headers/HeaderExplore';
import LowerMenu from '../../Components/footer/LowerMenu';

export default function MainExplorer({ history }) {
  const handleClick = ({ target }) => {
    if (target.name === 'food') {
      history.push('/explorar/comidas');
    } else {
      history.push('/explorar/bebidas');
    }
  };

  return (
    <div>
      <HeaderExplore history={ history } title="Explorar" />
      <div>
        <button
          className="explore__button"
          data-testid="explore-food"
          name="food"
          onClick={ handleClick }
          type="button"
        >
          Explorar Comidas
        </button>
        <button
          className="explore__button"
          data-testid="explore-drinks"
          name="drinks"
          onClick={ handleClick }
          type="button"
        >
          Explorar Bebidas
        </button>
      </div>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

MainExplorer.propTypes = {
  history: PropTypes.shape().isRequired,
};
