import React from 'react';

function SingleFoodItem({ history }) {
  return (
    <div>{history.location.pathname}</div>
  );
}

export default SingleFoodItem;
