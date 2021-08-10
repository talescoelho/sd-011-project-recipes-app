import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './RenderRecomendations.css';

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
  const limitRecipes = 6;

  if (recipes === undefined) return <p>Loading</p>;

  // Bilioteca que podemos usar: http://react-responsive-carousel.js.org/
  // https://www.npmjs.com/package/react-responsive-carousel
  // Melhor implementar
  return (
    <section className="images">
      {(type !== '' && recipes !== null)
        && recipes.slice(0, limitRecipes).map((recipe, index) => (
          <Link to={ `/${typeReco}/${recipe[id]}` } key={ index }>
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ index }
              hidden={ index > 1 }
            >
              <p data-testid={ `${index}-recomendation-title` }>{recipe[name]}</p>
              <img
                className="imageCard"
                data-testid={ `${index}-card-img` }
                src={ recipe[image] }
                alt={ name }
                width="150px"
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
