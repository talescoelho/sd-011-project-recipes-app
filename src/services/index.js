export const fetchApiMeals = async (url, search) => {
  const resultMeals = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ meals }) => meals)
    .catch((erro) => console.log(erro));

  return resultMeals;
};

export const fetchApiDrinks = async (url, search) => {
  const resultDrinks = await fetch(`${url}${search}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
    .catch((erro) => console.log(erro));

  return resultDrinks;
};
