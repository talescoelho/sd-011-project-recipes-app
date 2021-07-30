export const SEND_LOGIN_INFO = 'SEND_LOGIN_INFO';

export const sendLoginInfo = (email, password) => ({
  type: SEND_LOGIN_INFO,
  payload: email,
  payload2: password,
});
