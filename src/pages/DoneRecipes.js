import React from 'react';

const DoneRecipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [filteredRecipes, setFilteredRecipe] = React.useState(null);

  // [{
  //   id: id-da-receita,
  //   type: comida-ou-bebida,
  //   area: area-da-receita-ou-texto-vazio,
  //   category: categoria-da-receita-ou-texto-vazio,
  //   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
  //   name: nome-da-receita,
  //   image: imagem-da-receita
  // }]

  React.useEffect(() => {
    const doneRecipes = localStorage.getItem('doneRecipes');
    if (doneRecipes) {
      setRecipes(JSON.parse(doneRecipes));
      setFilteredRecipe(JSON.parse(doneRecipes));
    }
  }, []);

  console.log(recipes);
  console.log(filteredRecipes);
  function handleClickBtnFilters({ target: { value } }) {
    if (value === 'comida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'comida'));
    } else if (value === 'bebida') {
      setFilteredRecipe(recipes.filter((recipe) => recipe.type === 'bebida'));
    } else {
      setFilteredRecipe(recipes);
    }
  }

  return (
    <div>
      <button
        type="button"
        value="all"
        data-testid="filter-by-all-btn"
        onClick={ handleClickBtnFilters }
      >
        All
      </button>
      <button
        type="button"
        value="comida"
        data-testid="filter-by-food-btn"
        onClick={ handleClickBtnFilters }
      >
        Food
      </button>
      <button
        type="button"
        value="bebida"
        data-testid="filter-by-drink-btn"
        onClick={ handleClickBtnFilters }
      >
        Drinks
      </button>
    </div>
  );
};

export default DoneRecipes;
