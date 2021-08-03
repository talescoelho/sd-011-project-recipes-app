import React from 'react';
import RecipeConcluded from './RecipeConcluded';
import '../styles/DoneRecipes.css';

function DoneRecipes() {
  localStorage.setItem('doneRecipes', JSON.stringify([]));
  const parsedLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const obj2 = {
    id: 9999,
    type: 'bebida',
    area: 'Brazil',
    category: 'categoria',
    alcoholicOrNot: 'alcoholic',
    name: 'Cachaça',
    image: 'https://picsum.photos/160/140',
    doneDate: Date.now(),
    tags: ['Barzinho', 'Boteco'],
  };
  const obj = {
    id: 23123123,
    type: 'comida',
    area: 'Brazil',
    category: 'categoria',
    alcoholicOrNot: 'non-alcoholic',
    name: 'X TUDO',
    image: 'https://picsum.photos/160/140',
    doneDate: Date.now(),
    tags: ['Barzinho', 'lanches'],
  };
  localStorage.setItem('doneRecipes', JSON.stringify([...parsedLocalStorage, obj]));
  const parsedLocalStorage2 = JSON.parse(localStorage.getItem('doneRecipes'));
  localStorage.setItem('doneRecipes', JSON.stringify([...parsedLocalStorage2, obj2]));
  const favoriteItens = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div className="DoneRecipesContainer">
      {
        favoriteItens.map(
          (recipe, index) => <RecipeConcluded key={ index } recipe={ recipe } />,
        )
      }
    </div>
  );
}

export default DoneRecipes;
