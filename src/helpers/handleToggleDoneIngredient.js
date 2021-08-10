export default function handleToggleDoneIngredient({ target }, Id, func) {
  const ingredient = target.parentNode;
  ingredient.classList.toggle('doneIngredient');
  const ingredientName = ingredient.getAttribute('id');
  const key = func();
  const usedIngredients = JSON.parse(localStorage.getItem('doneIngredients'));

  if (usedIngredients[key][Id] && usedIngredients[key][Id].includes(ingredientName)) {
    const index = usedIngredients[key][Id].indexOf(ingredientName);
    localStorage.setItem('doneIngredients', JSON.stringify(
      { ...usedIngredients,
        [key]: { ...usedIngredients[key],
          [Id]: [
            ...usedIngredients[key][Id].slice(0, index),
            ...usedIngredients[key][Id].slice(index + 1)],
        },
      },
    ));
  } else if (usedIngredients[key][Id]) {
    localStorage.setItem('doneIngredients', JSON.stringify(
      { ...usedIngredients,
        [key]: { ...usedIngredients[key],
          [Id]: [...usedIngredients[key][Id], ingredientName] },
      },
    ));
  } else {
    localStorage.setItem('doneIngredients', JSON.stringify(
      { ...usedIngredients,
        [key]: { ...usedIngredients[key],
          [Id]: [ingredientName] },
      },
    ));
  }
};
