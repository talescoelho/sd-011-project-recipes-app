export const requestRandomDrinkRecipe = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((products) => products.text())
  .then((response) => console.log('Resposta postagem de sucesso:', response))
  .catch((error) => console.log('error na postagem:', error));

export const requestRandomFoodRecipe = () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((products) => products.text())
  .then((response) => console.log('Resposta postagem de sucesso:', response))
  .catch((error) => console.log('error na postagem:', error));
