import React from 'react';

function SingleItem({ history }) {
  console.log(history.location.pathname);
  return (
    <div>{history.location.pathname}</div>
  );
}

export default SingleItem;
