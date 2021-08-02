import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function RenderRecipes() {
  const [recipeType, setRecipeType] = useState({
    type: '',
    name: '',
    image: '',
  });
  const { data } = useSelector((state) => state.fetchReceitas);

  useEffect(() => {
    if (Object.keys(data)[0] === 'meals') {
      setRecipeType({
        type: 'meals',
        name: 'strMeal',
        image: 'strMealThumb',
      });
    } else {
      setRecipeType({
        type: 'drinks',
        name: 'strDrink',
        image: 'strDrinkThumb',
      });
    }
  }, [data]);

  const { type, name, image } = recipeType;
  const limitRecipes = 12;

  return (
    <section>
      {(type !== '' && data[type] !== null)
        && data[type].slice(0, limitRecipes).map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <p data-testid={ `${index}-card-name` }>{recipe[name]}</p>
            <img data-testid={ `${index}-card-img` } src={ recipe[image] } alt={ name } />
          </div>
        ))}

    </section>

  );
}

export default RenderRecipes;
