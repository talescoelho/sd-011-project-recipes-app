import React from 'react';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

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
  React.useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes) {
      setRecipes(JSON.parse(favoriteRecipes));
    }
  }, []);

  function handleShareBtnClick(type, id, index) {
    const url = window.location.href;
    const shareUrl = url.split('/receitas-favoritas')[0];
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

  return (
    <>
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      { recipes.map((recipe, index) => {
        const { id, type, area, category, alcoholicOrNot, name, image } = recipe;
        return (
          <div key={ id } alt>
            <div>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ image }
                alt={ name }
              />
            </div>
            <div>
              <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
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
