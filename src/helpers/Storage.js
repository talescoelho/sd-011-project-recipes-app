export const setStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

export const dateToday = () => {
  const today = new Date();
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
};

export const newDoneRecipe = (returnedDetail, typeFoods) => {
  const r = returnedDetail;
  const maxTags = 2;
  const newDoneRecip = {
    id: r.idMeal || r.idDrink,
    type: typeFoods,
    area: r.strArea || '',
    category: r.strCategory || '',
    alcoholicOrNot: r.strAlcoholic || '',
    name: r.strMeal || r.strDrink,
    image: r.strMealThumb || r.strDrinkThumb,
    doneDate: dateToday(),
    tags: r.strTags ? r.strTags.split(',').slice(0, maxTags) : [],
  };
  return newDoneRecip;
};
