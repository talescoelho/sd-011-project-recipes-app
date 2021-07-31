export default function objToArryOfObj(data) {
  const ingedientsKeys = (Object.keys(data))
    .filter((key) => key.includes('strIngredient'));
  const measureKeys = (Object.keys(data))
    .filter((key) => key.includes('strMeasure'));
  const ingredientsAndMesure = [];
  ingedientsKeys.forEach((key, index) => {
    if (data[key]) {
      const obj = {
        name: data[key],
        measure: data[measureKeys[index]],
      };
      ingredientsAndMesure.push(obj);
    }
  });
  return ingredientsAndMesure;
}
