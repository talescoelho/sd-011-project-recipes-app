// actions a serem alteradas conforme necessidade. (exportadas apenas como exemplo)
export const NEW_ACTION = 'NEW_ACTION';

export const newAction = (state) => ({
  type: NEW_ACTION,
  state,
});

export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});
