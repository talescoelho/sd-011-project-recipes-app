import React from 'react';
import { useParams } from 'react-router-dom';

function DrinksDetails() {
  // const { match: { params: { id } } } = props;
  // console.log(id);

  const { id } = useParams();
  console.log(id);
  return (
    <div>
      detaisl
      {id}
    </div>
  );
}

export default DrinksDetails;
