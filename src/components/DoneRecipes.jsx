import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeConcluded from './RecipeConcluded';

import '../styles/DoneRecipes.css';

function DoneRecipes({ filterBy }) {
  localStorage.setItem('doneRecipes', JSON.stringify([]));
  const parsedLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const obj2 = {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  };
  const obj = {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  };
  localStorage.setItem('doneRecipes', JSON.stringify([...parsedLocalStorage, obj]));
  const parsedLocalStorage2 = JSON.parse(localStorage.getItem('doneRecipes'));
  localStorage.setItem('doneRecipes', JSON.stringify([...parsedLocalStorage2, obj2]));
  const doneReceitas = JSON.parse(localStorage.getItem('doneRecipes'));
  const [doneItens, setDoneItens] = useState(doneReceitas);

  useEffect(() => {
    // ESTÁ BUGADO POIS NÃO ESTOU PEGANDO O DONE RECIPES DO CONTEXT AINDA PRECISA PEGAR OS DONE RECIPES DE LÁ PARA FILTRAR!
    if (filterBy === 'All') setDoneItens(doneReceitas);
    if (filterBy === 'Foods') {
      setDoneItens(doneItens.filter((recipe) => recipe.type === 'comida'));
    }
    if (filterBy === 'Drinks') {
      setDoneItens(doneItens.filter((recipe) => recipe.type === 'bebida'));
    }
  }, [filterBy]);
  return (
    <div className="DoneRecipesContainer">
      {
        doneItens.map(
          (recipe, index) => (
            <RecipeConcluded key={ index } index={ index } recipe={ recipe } />
          ),
        )
      }
    </div>
  );
}

DoneRecipes.propTypes = {
  filterBy: PropTypes.func.isRequired,
};

export default DoneRecipes;
