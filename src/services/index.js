export const searchByIngredient = async (ingredient, pathname) => {
  const type = pathname === '/bebidas' ? 'cocktail' : 'meal';
  const recipes = await fetch(`https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await recipes.json();
  return json;
};
export const searchByName = async (name, pathname) => {
  const type = pathname === '/bebidas' ? 'cocktail' : 'meal';
  const recipes = await fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${name}`);
  const json = await recipes.json();
  return json;
};
export const searchByFirstLetter = async (firstLetter, pathname) => {
  const type = pathname === '/bebidas' ? 'cocktail' : 'meal';
  if (firstLetter.length === 1) {
    const recipes = await fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const json = await recipes.json();
    return json;
  }
  window.alert('Sua busca deve conter somente 1 (um) carácter');
};
