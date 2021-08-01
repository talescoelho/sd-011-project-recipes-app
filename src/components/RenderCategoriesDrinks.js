import React from 'react';

function RenderCategoriesDrinks(whoCategory) {
  const MagicMikeDance = 12;

  return (
    whoCategory && whoCategory.slice(0, MagicMikeDance).map((itemCard, index) => (

      <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
        <img
          src={ itemCard.strDrinkThumb }
          data-testid={ `${index}-card-img` }
          alt={ itemCard.strDrinks }
        />
        <div className="card-body">
          <p data-testid={ `${index}-card-name` }>{ itemCard.strDrink }</p>
        </div>
      </div>))
  );
}

export default RenderCategoriesDrinks;
