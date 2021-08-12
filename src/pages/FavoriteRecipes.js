import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonShare from '../components/ButtonShare';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(favoriteRecipes);
  console.log(filteredRecipes);
  const [type, setType] = useState('all');

  useEffect(() => {
    if (favoriteRecipes) {
      let newFilteredRecipes = [...favoriteRecipes];
      if (type !== 'all') {
        newFilteredRecipes = newFilteredRecipes.filter((recipe) => recipe.type === type);
      }
      setFilteredRecipes(newFilteredRecipes);
    }
  }, [type]);

  const handleChange = (btn) => setType(btn);

  const handleDisfavor = (id) => {
    console.log(id);
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'))
      .filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
    setFilteredRecipes(recipes);
  };

  const href = window.location.origin;

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
        <ToggleButton name="type" data-testid="filter-by-food-btn" value="comida">
          Food
        </ToggleButton>
        <ToggleButton name="type" data-testid="filter-by-drink-btn" value="bebida">
          Drink
        </ToggleButton>
      </ToggleButtonGroup>
      {filteredRecipes && filteredRecipes.map((recipe, index) => (
        <section key={ index }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              src={ recipe.image }
              alt={ recipe.name }
              data-testid={ `${index}-horizontal-image` }
              style={ { width: ' 30%', height: '30%' } }
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { recipe.type === 'bebida'
              ? `${recipe.alcoholicOrNot}` : `${recipe.area} - ${recipe.category}`}
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h2>
          </Link>
          <ButtonShare
            path={ recipe.type === 'comida'
              ? `${href}/comidas/${recipe.id}` : `${href}/bebidas/${recipe.id}` }
            testid={ `${index}-horizontal-share-btn` }
          />
          <button
            type="button"
            onClick={ () => handleDisfavor(recipe.id) }
          >
            <img
              src={ blackHeartIcon }
              alt="ícone de desfavoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
        </section>
      ))}
    </>
  );
}
