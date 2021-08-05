import { fetchFood } from './FoodAPI';

export const doneRecipe = async (idReceita, type) => {
  const data = await fetchFood(idReceita, type);
  console.log(data);
  let objFormatado = [];

  if (localStorage.getItem('doneRecipes')) {
    objFormatado = JSON.parse(localStorage.getItem('doneRecipes'));
  }

  if (!objFormatado.find((x) => x.id === idReceita)) {
    objFormatado.push({
      id: idReceita,
      type: 'comida',
      area: data.strArea,
      category: data.strCategory,
      alcoholicOrNot: '',
      name: data.strMeal,
      image: data.strMealThumb,
      doneDate: Date.now(),
      tags: data.strTags,
    });

    localStorage.setItem('doneRecipes', JSON.stringify(objFormatado));
  }
};

export function isRecipeDone(idReceita) {
  const data = JSON.parse(localStorage.getItem('doneRecipes'));

  const idInteiro = parseInt(idReceita, 10);
  if (data) {
    const receipt = data.find((x) => parseInt(x.id, 10) === idInteiro);
    if (receipt && parseInt(receipt.id, 10) === idInteiro) {
      return true;
    }
  }

  return false;
}
