import React from 'react';
import Header from '../components/Header';
import ShareBtnIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  let list = [];
  if (localStorage.doneRecipes) {
    list = JSON.parse(localStorage.doneRecipes);
    console.log(list);
  }

  function btnClickHandler(type) {
    const infoArray = Object.values(type);
    const link = `http://localhost:3000/${infoArray[0]}s/${infoArray[1]}`;
    navigator.clipboard.writeText(link);
    const x = 'Link copiado!';
    document.getElementById('alert').innerHTML = x;
    return navigator.clipboard.writeText(link);
  }

  return (
    <main>
      <Header title="Receitas Feitas" haveSearchBtn={ false } />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      <div>
        {
          list !== null && list !== undefined
            ? list.map((recipe, index) => (
              <div key={ index }>
                <img
                  src={ `${recipe.image}` }
                  alt="imagem da receita"
                  data-testid={ `${index}-horizontal-image` }
                />
                <h4
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.area
                    ? `${recipe.area} - ${recipe.category}`
                    : `${recipe.alcoholicOrNot} - ${recipe.category}`}
                </h4>
                <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
                <h4
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  { recipe.doneDate }
                </h4>
                <div>
                  <button
                    type="button"
                    value={ recipe.type }
                    key={ recipe.id }
                    onClick={ () => btnClickHandler(
                      { type: recipe.type, id: recipe.id },
                    ) }
                  >
                    <img
                      data-testid={ `${index}-horizontal-share-btn` }
                      src={ ShareBtnIcon }
                      alt="icone Share"
                    />
                  </button>
                  <p id="alert" />
                </div>
                {
                  recipe.tags.map((tag, tagIndex) => (
                    <h4
                      key={ tagIndex }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </h4>
                  ))
                }
              </div>))
            : ''
        }
      </div>
    </main>);
}
