import React, { useState } from 'react';
import DoneRecipeCards from '../components/DoneRecipeCards';
import Header from '../components/Header';

function ReceitasFeitas() {
  const mock = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <Header title="Receitas Feitas" />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setFilter('all') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFilter('comida') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFilter('bebida') }
      >
        Drinks
      </button>
      {mock.filter((e) => {
        switch (filter) {
        case 'all':
          return true;
        case 'comida':
          return e.type === filter;
        case 'bebida':
          return e.type === filter;
        default:
          return true;
        }
      }).map((e, i) => (e.type === 'comida' ? (
        <DoneRecipeCards
          key={ i }
          id={ e.id }
          comidaOuBebida={ e.type }
          src={ e.image }
          name={ e.name }
          index={ i }
          text={ e.category }
          date={ e.doneDate }
          tags={ e.tags }
          area={ e.area }
          data={ e }
        />)
        : (
          <DoneRecipeCards
            key={ i }
            id={ e.id }
            comidaOuBebida={ e.type }
            src={ e.image }
            name={ e.name }
            index={ i }
            text={ e.alcoholicOrNot }
            date={ e.doneDate }
            tags={ e.tags }
            data={ e }
          />
        )))}
    </div>
  );
}

export default ReceitasFeitas;
