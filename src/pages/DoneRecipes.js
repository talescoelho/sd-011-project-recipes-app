import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import CardsRecipesDone from '../components/CardsRecipesDone';
import Header from '../components/Header';

export default function DoneRecipes() {
  const doneRecipes = localStorage.getItem('doneRecipes');
  console.log(doneRecipes);
  const parsedDoneRecipe = JSON.parse(doneRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(parsedDoneRecipe);
  const [type, setType] = useState('');
  useEffect(() => {
    if (doneRecipes) {
      let newFilteredRecipes = [...doneRecipes];
      if (type !== 'all') {
        newFilteredRecipes = newFilteredRecipes.filter((recipe) => recipe.type === type);
      }
      setFilteredRecipes(newFilteredRecipes);
    }
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
          <ToggleButton name="type" data-testid="filter-by-all-btn" value="">
            All
          </ToggleButton>
          <ToggleButton name="type" data-testid="filter-by-food-btn" value="comida">
            Food
          </ToggleButton>
          <ToggleButton name="type" data-testid="filter-by-drink-btn" value="bebida">
            Drink
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
      <section>
        { filteredRecipes.length > 0 && filteredRecipes.map((recipe, index) => (
          <CardsRecipesDone recipe={ recipe } index={ index } key={ index } />))}
      </section>
    </div>
  );
}
