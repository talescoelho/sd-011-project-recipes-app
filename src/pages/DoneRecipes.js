import React from 'react';
import shareIcon from '../images/shareIcon.svg';

const DoneRecipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [filteredRecipes, setFilteredRecipe] = React.useState([]);

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
      <div>
        {filteredRecipes.map((recipe, index) => {
          const { image, id, category, name } = recipe;
          return (
            <div key={ id }>
              <img src={ image } alt="" data-testid={ `${index}-horizontal-image` } />
              <p data-testid={ `${index}-horizontal-top-text` }>{category}</p>
              <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
              <p data-testid={ `${index}-horizontal-done-date` }>{id}</p>
              <button type="button">
                <img
                  src={ shareIcon }
                  alt=""
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
              {/* <p data-testid={ `${index}--horizontal-tag` }>{id}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoneRecipes;
