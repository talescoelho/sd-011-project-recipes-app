import React from 'react';

function RenderCategories(whoCategory) {
  const MagicMikeDance = 12;

  return (

    whoCategory && whoCategory.slice(0, MagicMikeDance).map((itemCard, index) => (

      <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
        <img
          src={ itemCard.strMealThumb }
          data-testid={ `${index}-card-img` }
          alt={ itemCard.strMeal }
        />
        <div className="card-body">
          <p data-testid={ `${index}-card-name` }>{ itemCard.strMeal }</p>
        </div>
      </div>))
  );
}

export default RenderCategories;
