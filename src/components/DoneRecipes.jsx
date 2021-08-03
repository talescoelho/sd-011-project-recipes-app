import React, { useState, useContext, useEffect } from 'react';
import RecipeConcluded from './RecipeConcluded';
// import RecipesContext from '../context/RecipesContext';

import '../styles/DoneRecipes.css';

function DoneRecipes({ filterBy }) {
  // const { doneRecipes } = useContext(RecipesContext);a
  localStorage.setItem('doneRecipes', JSON.stringify([]));
  const parsedLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const obj2 = {
    id: 9999,
    type: 'bebida',
    area: 'Brazil',
    alcoholicOrNot: 'alcoholic',
    name: 'Cachaça',
    image: 'https://picsum.photos/160/140',
    doneDate: new Date(),
    tags: ['Barzinho', 'Boteco'],
  };
  const obj = {
    id: 23123123,
    type: 'comida',
    area: 'Brazil',
    category: 'categoria',
    name: 'X TUDO',
    image: 'https://picsum.photos/160/140',
    doneDate: new Date(),
    tags: ['Barzinho', 'lanches'],
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

export default DoneRecipes;
