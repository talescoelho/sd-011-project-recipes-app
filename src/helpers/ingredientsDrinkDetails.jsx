function ingredientsMealDetails(details) {
  const three = 3;
  const seventeen = 17;
  const fourtySix = 46;
  const fifteen = 15;

  const ingredientsList = (Object.entries(details).filter((entrie, index) => {
    if (index >= seventeen && index <= fourtySix) {
      return entrie;
    }
    return null;
  }).map((ingredient, index, array) => {
    if (index < fifteen) {
      return (
        `${ingredient[1]}${!array[index + fifteen][1]
          ? '' : ` - ${array[index + fifteen][1]}`}`
      );
    }
    return null;
  })
    .filter((ingredient) => (
      ingredient && ingredient.length >= three
       && !(ingredient.includes('null') || ingredient.includes('http'))
    )));
  return ingredientsList;
}

export default ingredientsMealDetails;
