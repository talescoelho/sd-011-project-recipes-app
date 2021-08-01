import React from 'react';
// import PropTypes from 'prop-types';

function SingleFoodItem() {
  return (
    <div>{window.location.pathname}</div>
  );
}

export default SingleFoodItem;

// SingleFoodItem.propTypes = {
//   history: PropTypes.shape({
//     location: PropTypes.shape({
//       pathname: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
