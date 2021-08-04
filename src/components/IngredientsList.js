import React from 'react';

function IngredientsList({ ingred }) {
  function renderIngredList(ing) {
    let ingredList = [];
    ingred.forEach((item) => ingredList.push({ [item[0]]: item[1] }));
    console.log(ingredList);
  }

  return (
    <div>
      {renderIngredList(ingred)}
    </div>
  )
}

export default IngredientsList;
