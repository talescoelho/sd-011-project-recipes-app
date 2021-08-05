export const retrieveDoneRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return doneRecipes;
};

export const saveNewDoneRecipe = (newRecipe) => {
  const recipes = retrieveDoneRecipes();
  localStorage.setItem('doneRecipes', JSON.stringify([...recipes, newRecipe]));
};

export const retrieveInProgressRecipes = () => {
  const defaultObj = {
    cocktails: {},
    meals: {},
  };
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || defaultObj;
  return inProgress;
};

// const handleStartRecipe = () => {
//   const {
//     idDrink,
//     strDrink,
//     strCategory,
//     strTags,
//     strDrinkThumb,
//     strAlcoholic,
//   } = details;
//   const timeNow = Date.now();
//   const obj = {
//     id: idDrink,
//     type: 'bebida',
//     area: '',
//     category: strCategory || '',
//     alcoholicOrNot: strAlcoholic || '',
//     name: strDrink,
//     image: strDrinkThumb,
//     doneDate: timeNow,
//     tags: strTags ? strTags.split(',') : [],
//   };
//   saveNewDoneRecipe(obj);
// };
