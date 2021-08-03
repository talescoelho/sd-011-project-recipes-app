import React from 'react';
import PropTypes from 'prop-types';

function Details({ match: { url, params: { id } } }) {
  return (
    // teste
    <div>
      { url.includes('comidas') ? <p>É uma comida</p> : <p>É uma bebida</p> }
      <p>
        O id dessa receita é
        <span>{ id }</span>
      </p>
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default Details;
