import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import shareIcon from '../images/shareIcon.svg';

const favoriteRecipes = [{
  id: '52785',
  type: 'meal',
  area: 'Indian',
  category: 'Vegetarian',
  alcoholicOrNot: '',
  name: 'Dal fry',
  image: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
},
{
  id: '178319',
  type: 'drink',
  area: '',
  category: 'Cocktail',
  alcoholicOrNot: 'Alcoholic',
  name: 'Aquamarine',
  image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
}];

export default function FavoriteRecipes() {
  // const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(favoriteRecipes);
  console.log(filteredRecipes);
  const [type, setType] = useState('all');

  useEffect(() => {
    let newFilteredRecipes = [...favoriteRecipes];
    if (type !== 'all') {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => recipe.type === type);
    }
    setFilteredRecipes(newFilteredRecipes);
  }, [type]);

  const handleChange = (btn) => setType(btn);

  // const deleteFavorite = () => {
  //   // const favorites = JSON.parse(localStorage.favoriteRecipes);
  //   // localStorage.removeItem(favorites);
  // };

  // const copy = require('clipboard-copy');

  return (
    <>
      <Header title="Receitas Favoritas" search={ false } />
      <ToggleButtonGroup
        type="radio"
        name="type"
        value={ type }
        onChange={ handleChange }
      >
        <ToggleButton name="type" data-testid="filter-by-all-btn" value="all">
          All
        </ToggleButton>
        <ToggleButton name="type" data-testid="filter-by-food-btn" value="meal">
          Food
        </ToggleButton>
        <ToggleButton name="type" data-testid="filter-by-drink-btn" value="drink">
          Drink
        </ToggleButton>
      </ToggleButtonGroup>
      {filteredRecipes.map((recipe, index) => (
        <section key={ index }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
            style={ { width: ' 30%', height: '30%' } }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>
            { recipe.type === 'drink'
              ? `${recipe.alcoholicOrNot}` : `${recipe.area} - ${recipe.category}`}
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h2>
          </Link>
          <button type="button">
            <img
              src={ blackHeartIcon }
              data-testid={ `${recipe.index}-horizontal-favorite-btn` }
              alt="icone de favoritar"
            />
          </button>
          {/* <button type="button" onClick={ handleClick }>
            <img
              src={ shareIcon }
              alt="icone de compartilhar"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button> */}
        </section>
      ))}
    </>
  );
}
