import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MadeRecipes = () => {
  const recipes = useSelector((state) => state.doneRecipesReducer.doneRecipes);

  const renderCards = () => {
    if (recipes) {
      recipes.map((recipe, index) => {
        const type = Object.keys(recipe);
        const newType = type[0].slice(2, type.length - 1);
        console.log(type);

        return (
          <div key={ index }>
            <img
              src={ recipe[0][`str${newType}Thumb`] }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe[0][`str${newType}`] }
            />
            <h1 data-testid={ `${index}-horizontal-name` }>{recipe[0][`str${newType}`]}</h1>
            <p data-testid={ `${index}-horizontal-top-text` }>{recipe[0].strCategory}</p>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe[1]}</p>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      <Link to="/comidas/52768/in-progress">
        <button type="button">uhu</button>

      </Link>
      {recipes ? renderCards() : null}
    </div>
  );
};

export default MadeRecipes;

// O imagem do card de receita deve ter o atributo data-testid="${index}-horizontal-image";
// O texto da categoria da receita deve ter o atributo data-testid="${index}-horizontal-top-text";
// O texto do nome da receita deve ter o atributo data-testid="${index}-horizontal-name";
// O texto da data que a receita foi feita deve ter o atributo data-testid="${index}-horizontal-done-date";
// O elemento de compartilhar a receita deve ter o atributo data-testid="${index}-horizontal-share-btn";
// As tags da receita devem possuir o atributo data-testid=${index}-${tagName}-horizontal-tag;
