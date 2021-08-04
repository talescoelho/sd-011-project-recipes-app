import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import CardsRecipesDone from '../components/CardsRecipesDone';
import Header from '../components/Header';

const doneRecipes = [{
  id: '52785',
  type: 'meal',
  area: 'Indian',
  category: 'Vegetarian',
  alcoholicOrNot: '',
  name: 'Dal fry',
  image: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
  doneDate: '06/07/21',
  tags: ['Curry', 'Vegetarian', 'Cake'],
},
{
  id: '178319',
  type: 'drink',
  area: '',
  category: 'Cocktail',
  alcoholicOrNot: 'Alcoholic',
  name: 'Aquamarine',
  image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  doneDate: '05/06/2021',
  tags: [],
}];

export default function DoneRecipes() {
  // const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);
  const [type, setType] = useState('all');
  useEffect(() => {
    let newFilteredRecipes = [...doneRecipes];
    if (type !== 'all') {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => recipe.type === type);
    }
    setFilteredRecipes(newFilteredRecipes);
  }, [type]);

  const handleChange = (val) => setType(val);

  return (
    <div>
      <Header title="Receitas Feitas" search={ false } />
      <section style={ { textAlign: 'center' } }>
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
      </section>
      <section>
        { filteredRecipes.map((recipe, index) => (
          <CardsRecipesDone recipe={ recipe } key={ index } />))}
      </section>
    </div>
  );
}
