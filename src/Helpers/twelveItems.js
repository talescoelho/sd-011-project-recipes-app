function twelveItems(dataResult) {
  const whichMethod = Object.keys(dataResult)[0];
  console.log(whichMethod);

  const quantityItems = 12;
  let array = [];

  if (whichMethod === 'drinks' && dataResult.drinks.length >= quantityItems) {
    array = [];
    for (let i = 0; i !== quantityItems; i += 1) {
      array.push(dataResult.drinks[i]);
    }
    return array;
  }

  if (whichMethod === 'meals' && dataResult.meals.length >= quantityItems) {
    array = [];
    for (let i = 0; i !== quantityItems; i += 1) {
      array.push(dataResult.meals[i]);
    }
    return array;
  }

  if (whichMethod === 'drinks') {
    return dataResult.drinks;
  }
  return dataResult.meals;
}

export default twelveItems;
