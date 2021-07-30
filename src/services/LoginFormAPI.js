export function setToken(data) {
  const { email } = data;
  const mealsToken = 1;
  const cocktailsToken = 1;
  localStorage.setItem('mealsToken', mealsToken);
  localStorage.setItem('cocktailsToken', cocktailsToken);
  localStorage.setItem('user', JSON.stringify({ email }));
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
