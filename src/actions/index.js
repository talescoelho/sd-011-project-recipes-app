function SendEmail(email) {
  const user = {
    email,
  };
  localStorage.setItem('mealsToken', JSON.stringify(1));
  localStorage.setItem('cocktailsToken', JSON.stringify(1));
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: 'ADD_EMAIL',
    email,
  };
}

export default SendEmail;
