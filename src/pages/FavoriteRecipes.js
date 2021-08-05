import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Header from '../components/Header';
// import blackHeartIcon from '../images/blackHeartIcon';

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

const renderParagraph = (
  <p data-testid={ `${favoriteRecipes.index}-horizontal-top-text` }>
    {`${favoriteRecipes.area}-${favoriteRecipes.category}`}
  </p>);

console.log(favoriteRecipes);

export default function FavoriteRecipes() {
  // const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // console.log(favoriteRecipes);
  const [setFilteredRecipes] = useState(favoriteRecipes);
  const [type, setType] = useState('all');
  useEffect(() => {
    let newFilteredRecipes = [...favoriteRecipes];
    if (type !== 'all') {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => recipe.type === type);
    }
    setFilteredRecipes(newFilteredRecipes);
  });

  const handleChange = (btn) => setType(btn);

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
      {favoriteRecipes.map((recipe, index) => (
        <section key={ index }>
          <img
            src={ recipe.image }
            alt="imagem da receita"
            data-testid={ `${index}-horizontal-image` }
          />
          { recipe.area && renderParagraph }
          {!recipe.area && <p>{ `${recipe.category}` }</p>}
          <h2 data-testid={ `${index}-horizontal-name` }>
            { recipe.name }
          </h2>
        </section>
      ))}
      ;
    </>
  );
}
