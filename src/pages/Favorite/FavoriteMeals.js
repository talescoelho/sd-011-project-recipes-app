function FavoriteMeals() {
  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(Local);
    if (Local) {
      return Local.map((item, index) => (<div key={ index }>
        <span data-testid="${index}-horizontal-top-text"> </span>
       <h2> {item.name}</h2>
                                         </div>));
    }
  };
  return (
    <div>
      {getFavoriteLocalStorage()}
    </div>
  );
}

export default FavoriteMeals;
