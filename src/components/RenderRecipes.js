import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function RenderRecipes() {
  const [recipeType, setRecipeType] = useState({
    type: '',
    name: '',
    image: '',
  });
  const { typeRecipe, drinks, meals } = useSelector((state) => state.fetchReceitas);

  useEffect(() => {
    if (typeRecipe === 'meals') {
      setRecipeType({
        recipes: meals,
        type: 'meals',
        name: 'strMeal',
        image: 'strMealThumb',
      });
    } else {
      setRecipeType({
        recipes: drinks,
        type: 'drinks',
        name: 'strDrink',
        image: 'strDrinkThumb',
      });
    }
  }, [typeRecipe]);

  const { recipes, type, name, image } = recipeType;
  const limitRecipes = 12;

  return (
    <section>
      {(type !== '' && recipes !== null)
        && recipes.slice(0, limitRecipes).map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <p data-testid={ `${index}-card-name` }>{recipe[name]}</p>
            <img data-testid={ `${index}-card-img` } src={ recipe[image] } alt={ name } />
          </div>
        ))}

    </section>

  );
}

export default RenderRecipes;
