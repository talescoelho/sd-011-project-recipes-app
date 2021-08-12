import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SharedButton from '../components/SharedButton';
import Header from '../components/Header';

function ReceitasFeitas() {
  const [filter, setFilter] = useState('all');

  localStorage.setItem('doneRecipes', JSON.stringify([
    {
      id: '52771',
      type: 'comidas',
      area: '',
      category: 'Italian - Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebidas',
      area: '',
      category: 'Alcoholic',
      alcoholicOrNot: 'alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '10/06/2019',
      tags: [],
    },
  ]));

  const cardsRecipesDone = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

    const filted = doneRecipes.filter(({ type }) => type === filter || filter === 'all');

    return filted.map(({ image, category, name, doneDate, tags, type, id }, index) => (
      <div key={ index }>
        <Link to={ `/${type}/${id}` }>
          <img
            src={ image }
            data-testid={ `${index}-horizontal-image` }
            alt="card recipe done"
            style={ { maxWidth: 25 } }
          />
        </Link>

        <SharedButton
          path={ `http://localhost:3000/${type}/${id}` }
          dataTest={ `${index}-horizontal-share-btn` }
        />

        <h6 data-testid={ `${index}-horizontal-top-text` }>{category}</h6>
        <Link to={ `/${type}/${id}` }>
          <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
        </Link>

        <h5 data-testid={ `${index}-horizontal-done-date` }>
          {`Data de preparo: ${doneDate}`}
        </h5>
        {tags.map((tag) => (
          <span
            key={ tag }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            {tag}
          </span>
        ))}
      </div>
    ));
  };
  return (
    <div>
      <Header title="Receitas Feitas" />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
          style={ { marginTop: 40 } }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('comidas') }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('bebidas') }
        >
          Drinks
        </button>
      </div>

      <div>
        {cardsRecipesDone()}
      </div>

    </div>
  );
}
export default ReceitasFeitas;
