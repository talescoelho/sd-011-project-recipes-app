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
