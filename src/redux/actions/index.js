// actions a serem alteradas conforme necessidade. (exportadas apenas como exemplo)
export const ADD_EMAIL = 'ADD_EMAIL';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});
