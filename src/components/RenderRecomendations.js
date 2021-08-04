import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RenderRecomendations({ typeReco }) {
  const [recipeType, setRecipeType] = useState({
    type: '',
    name: '',
    image: '',
  });
  const { drinks, foods } = useSelector((state) => state.fetchReceitas);

  useEffect(() => {
    if (typeReco === 'comidas') {
      setRecipeType({
        recipes: foods.meals,
        type: 'meals',
        id: 'idMeal',
        name: 'strMeal',
        image: 'strMealThumb',
      });
    } else {
      setRecipeType({
        recipes: drinks.drinks,
        type: 'drinks',
        id: 'idDrink',
        name: 'strDrink',
        image: 'strDrinkThumb',
      });
    }
  }, [drinks.drinks, foods.meals]);

  const { recipes, type, name, image, id } = recipeType;
  const limitRecipes = 2;

  if (recipes === undefined) return <p>Loading</p>;

  return (
    <section>
      {(type !== '' && recipes !== null)
        && recipes.slice(0, limitRecipes).map((recipe, index) => (
          <Link to={ `bebidas/${recipe[id]}` } key={ index }>
            <div data-testid={ `${index}-recomendation-card` } key={ index }>
              <p data-testid={ `${index}-card-name` }>{recipe[name]}</p>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[image] }
                alt={ name }
                width="50px"
              />
            </div>
          </Link>
        ))}

    </section>
  );
}

export default RenderRecomendations;

RenderRecomendations.propTypes = {
  typeReco: PropTypes.string.isRequired,
};
