// actions a serem alteradas conforme necessidade. (exportadas apenas como exemplo)
export const NEW_ACTION = 'NEW_ACTION';

export const newAction = (state) => ({
  type: NEW_ACTION,
  state,
});
