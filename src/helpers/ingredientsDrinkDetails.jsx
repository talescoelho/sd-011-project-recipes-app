function ingredientsMealDetails(details) {
  const ingredientsList = (Object.entries(details)
    .filter((entrie) => (
      entrie[0].includes('strIngredient') || entrie[0].includes('strMeasure'))
      && entrie[1]).map((entrie, index, entries) => {
      if (index < (entries.length / 2)) {
        return (
          `${entrie[1]} - ${entries[index + (entries.length / 2)][1]}`
        );
      }
      return null;
    }).filter((ingredient) => ingredient));
  return ingredientsList;
}

export default ingredientsMealDetails;
