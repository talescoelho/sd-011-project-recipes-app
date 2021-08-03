import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function RecipesDone() {
  const [click, setClick] = useState(false);
  const history = useHistory();

  function copyLink(type, id) {
    copy(`http://localhost:3000/${type}s/${id}`);
    setClick(true);
  }
  const doneRecipes = [
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

  return (
    <div>
      <h1>My Recipe Done Page</h1>
      <Header title="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      <span>{click ? <p>Link copiado!</p> : <div />}</span>
      {doneRecipes.map((recipes, index) => (
        <div key={ index }>
          <input
            type="image"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="card da receita"
            onClick={ () => copyLink(recipes.type, recipes.id) }
          />
          {/* <input
            type="image"
            data-testid={ `${index}-horizontal-image` }
            src={ recipes.image }
            alt={ recipes.name }
            onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
          /> */}
          <img 
            data-testid={ `${index}-horizontal-image` }
            src={ recipes.image }
            alt={ recipes.name }
            onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }        
          />
          <ul>
            <li data-testid={ `${index}-horizontal-top-text` }>
              {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
            </li>
            <li
              data-testid={ `${index}-horizontal-name` }
              onClick={ () => history.push(`/${recipes.type}s/${recipes.id}`) }
            >
              { recipes.name }
            </li>
            <li data-testid={ `${index}-horizontal-done-date` }>{ recipes.doneDate }</li>
            {recipes.tags && recipes.tags.map((tag, indexTag) => (
              <li
                key={ indexTag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipesDone;
