import { fetchFood } from './FoodAPI';

export default function doneRecipe(idReceita) {
  fetchFood(idReceita).then((data) => {
    let objFormatado = [];

    if (localStorage.getItem('doneRecipes')) {
      objFormatado = JSON.parse(localStorage.getItem('doneRecipes'));
    }

    if (!objFormatado.find((x) => x.id === idReceita)) {
      objFormatado.push({
        id: idReceita,
        type: 'comida',
        area: data.meals[0].strArea,
        category: data.meals[0].strCategory,
        alcoholicOrNot: '',
        name: data.meals[0].strMeal,
        image: data.meals[0].strMealThumb,
        doneDate: Date.now(),
        tags: data.meals[0].strTags,
      });

      localStorage.setItem('doneRecipes', JSON.stringify(objFormatado));
    }
  });
}

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
