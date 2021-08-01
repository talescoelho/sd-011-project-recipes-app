import React from 'react';
import PropTypes from 'prop-types';

function SingleFoodItem({ history }) {
  return (
    <div>{history.location.pathname}</div>
  );
}

export default SingleFoodItem;

SingleFoodItem.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
