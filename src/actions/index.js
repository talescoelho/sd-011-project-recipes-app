export const SEND_LOGIN_INFO = 'SEND_LOGIN_INFO';
export const ADD_RECIPES = 'ADD_RECIPES';

export const sendLoginInfo = (email, password) => ({
  type: SEND_LOGIN_INFO,
  payload: email,
  payload2: password,
});

export const saveRecipes = (recipes) => ({
  type: ADD_RECIPES,
  recipes,
});
