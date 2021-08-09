export const sendFormData = (payload) => ({
  type: 'SEND_FORM_DATA',
  payload,
});

export const sendAPIData = (payload) => ({
  type: 'SEND_API_DATA',
  payload,

});

export const getFoodCard = (payload) => ({
  type: 'FETCH_FOOD_CARD',
  payload,
});

export const getFoodCategories = (payload) => ({
  type: 'FETCH_FOOD_CATEGORIES',
  payload,
});

export const getFilteredCategory = (payload) => ({
  type: 'FETCH_FILTERED_CATEGORY',
  payload,
});

export const getFavoriteRecipes = (payload) => ({
  type: 'GET_FAVORITE_RECIPES',
  payload,

});
