import React, { useState, useContext } from 'react';
import NextIcon from '../images/next.png';
import PreviousIcon from '../images/previous.png';
import RecipesContext from '../context/RecipesContext';

function RecommendedsRecipes() {
  const { recommended: recipes } = useContext(RecipesContext);
  const [position, setPosition] = useState({ a: 0, b: 1 });

  const prevSlide = () => {
    if (position.a !== 0) {
      setPosition({ a: position.a -= 2, b: position.b -= 2 });
    }
  };
  const nextSlide = () => {
    if (position.b !== recipes.length - 1) {
      setPosition({ a: position.a += 2, b: position.b += 2 });
    }
  };

  return (
    <div className="py-5">
      <h2 className="text-center ingredient-title">Recommendations</h2>
      <div className="carousel">
        <button type="button" onClick={ prevSlide }>
          <img
            src={ PreviousIcon }
            alt="Previous Icon"
            className="button-carousel-icon"
          />
        </button>
        {Array.isArray(recipes)
       && recipes.map((recipe, index) => (
         <div
           key={ index }
           data-testid={ `${index}-recomendation-card` }
           className={ index !== position.a && index !== position.b
             ? 'hide' : 'col-sm-3' }
         >
           <div className="card border border-danger">
             <div className="card-img-top">
               <img
                 className="img-fluid"
                 src={ recipe.strMealThumb || recipe.strDrinkThumb }
                 alt={ recipe.strMeal || recipe.strDrink }
               />
             </div>
             <div className="card-inner">
               <h2
                 className="title-recipe"
                 data-testid={ `${index}-recomendation-title` }
               >
                 { recipe.strMeal || recipe.strDrink }
               </h2>
             </div>
           </div>
         </div>
       ))}
        <button type="button" onClick={ nextSlide }>
          <img src={ NextIcon } alt="Next Icon" className="button-carousel-icon" />
        </button>
      </div>
    </div>
  );
}

export default RecommendedsRecipes;
