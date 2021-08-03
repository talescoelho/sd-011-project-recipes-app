import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   area: area-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }]

const FavoriteRecipes = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [indexOfMessageClipboard, setIndexOfMessageClipboard] = React.useState(null);
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes) {
      setRecipes(JSON.parse(favoriteRecipes));
    }
  }, []);

  React.useEffect(() => {
    if (filter === 'all') {
      setFilteredRecipes(recipes);
      setIndexOfMessageClipboard(null);
    } else if (filter === 'comida') {
      setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'comida'));
      setIndexOfMessageClipboard(null);
    } else if (filter === 'bebida') {
      setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'bebida'));
      setIndexOfMessageClipboard(null);
    }
  }, [filter, recipes]);

  const url = window.location.href;
  const shareUrl = url.split('/receitas-favoritas')[0];

  function handleShareBtnClick(type, id, index) {
    if (type === 'comida') {
      navigator.clipboard.writeText(`${shareUrl}/comidas/${id}`);
    } else if (type === 'bebida') {
      navigator.clipboard.writeText(`${shareUrl}/bebidas/${id}`);
    }
    setIndexOfMessageClipboard(index);
    const ms = 2000;
    setTimeout(() => {
      setIndexOfMessageClipboard(null);
    }, ms);
  }

  function handleClickFavoriteRecipe(id) {
    const filteredRecipesById = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipesById);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredRecipesById));
    setIndexOfMessageClipboard(null);
  }

  return (
    <>
      <div>
        <button
          type="button"
          name="all"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
        >
          All
        </button>
        <button
          type="button"
          name="comida"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('comida') }
        >
          Food
        </button>
        <button
          type="button"
          name="bebida"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('bebida') }
        >
          Drinks
        </button>
      </div>
      { filteredRecipes.map((recipe, index) => {
        const { id, type, area, category, alcoholicOrNot, name, image } = recipe;
        return (
          <div key={ id }>
            <div>
              <Link to={ `${type}s/${id}` }>
                <img
                  className="top-img"
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
              </Link>
            </div>
            <div>
              <p>{type}</p>
              { area && (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${area} - ${category}`}
                </p>) }
              { alcoholicOrNot
                && (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {`${alcoholicOrNot} - ${category}`}
                  </p>) }
            </div>
            <div>
              { indexOfMessageClipboard === index && <p>Link copiado!</p> }
              <button
                src={ shareIcon }
                type="button"
                onClick={ () => handleShareBtnClick(type, id, index) }
                data-testid={ `${index}-horizontal-share-btn` }
              >
                <img src={ shareIcon } alt="Share" />
              </button>
              <button
                type="button"
                onClick={ () => handleClickFavoriteRecipe(id) }
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="Heart" />
              </button>
            </div>
          </div>
        );
      }) }
    </>
  );
};

export default FavoriteRecipes;
