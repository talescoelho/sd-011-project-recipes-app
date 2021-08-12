const SEND_DONE_INGREDIENTS_TO_STORE = 'SEND_DONE_INGREDIENTS_TO_STORE';

function sendDoneIngredientsToStoreingredients(ingredients) {
  return {
    type: SEND_DONE_INGREDIENTS_TO_STORE,
    ingredients,
  };
}

export {
  sendDoneIngredientsToStoreingredients,
  SEND_DONE_INGREDIENTS_TO_STORE,
};
