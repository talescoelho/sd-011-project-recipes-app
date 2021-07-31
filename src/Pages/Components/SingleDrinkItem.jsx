import React from 'react';

function SingleDrinkItem({ history }) {
  return (
    <div>{history.location.pathname}</div>
  );
}

export default SingleDrinkItem;
