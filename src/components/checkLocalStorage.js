function checkLocalStorage() {
  const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!localStorageDoneRecipes) {
    setIsRecipeDone(false);
    return null;
  }
}

export default checkLocalStorage;
