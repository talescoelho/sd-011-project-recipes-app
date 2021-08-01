import React from 'react';
import PropTypes from 'prop-types';

function SingleDrinkItem({ history }) {
  return (
    <div>{history.location.pathname}</div>
  );
}

export default SingleDrinkItem;

SingleDrinkItem.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
