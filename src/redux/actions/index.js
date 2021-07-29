// actions a serem alteradas conforme necessidade. (exportadas apenas como exemplo)
const NEW_ACTION = 'NEW_ACTION';
const OTHER_NEW_ACTION = 'OTHER_NEW_ACTION';

export const newAction = (state) => ({
  type: NEW_ACTION,
  state,
});

export const otherNewAction = (state) => ({
  type: OTHER_NEW_ACTION,
  state,
});
