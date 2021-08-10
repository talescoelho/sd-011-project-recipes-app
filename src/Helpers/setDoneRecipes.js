export default function setDoneRecipes(id, item, type) {
  let newObject;
  if (type === 'foods') {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete inProgressRecipes.meals[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

    newObject = {
      id: item.idMeal,
      type: 'comida',
      area: item.strArea,
      category: item.strCategory,
      alcoholicOrNot: '',
      name: item.strMeal,
      image: item.strMealThumb,
      doneDate: `${new Date().toLocaleString()}`,
      tags: item.strTags,
    };
  }

  if (type === 'drinks') {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete inProgressRecipes.cocktails[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

    newObject = {
      id: item.idDrink,
      type: 'bebida',
      area: '',
      category: item.strCategory,
      alcoholicOrNot: item.strAlcoholic,
      name: item.strDrink,
      image: item.strDrinkThumb,
      doneDate: `${new Date().toLocaleString()}`,
      tags: item.strTags,
    };
  }

  const currentDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(currentDoneRecipes);
  currentDoneRecipes.push(newObject);
  localStorage.setItem('doneRecipes', JSON.stringify(currentDoneRecipes));
}
