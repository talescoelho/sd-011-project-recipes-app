import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/detailsContext';

// const d = new Date();
// console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);

// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   area: area-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita,
//   doneDate: quando-a-receita-foi-concluida,
//   tags: array-de-tags-da-receita-ou-array-vazio
// }]

export default function RecipeButton({ state, recipe }) {
  const history = useHistory();
  const { ingredients } = useContext(DetailsContext);
  const { pathname } = history.location;
  const verify = (ingredients) ? ingredients.some((e) => e.checked === false) : false;
  function setDoneRecipe() {
    const date = new Date();
    const {
      category, name, image, type, tags, id, area,
    } = recipe;
    const obj = {
      id,
      type,
      area,
      category: (type === 'comida') ? category : '',
      alcoholicOrNot: (type === 'comida') ? '' : category,
      name,
      image,
      doneDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      tags,
    };
    const doneRecipes = JSON.parse(localStorage.doneRecipes);
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, obj]));
  }
  if (!state) {
    return (
      <button
        type="button"
        className="startButton"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${pathname}/in-progress`) }
      >
        Iniciar Receita
      </button>
    );
  }
  if (state === 'inProgress') {
    console.log(state);
    return (
      <button
        type="button"
        className="startButton"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${pathname}/in-progress`) }
      >
        Continuar Receita
      </button>
    );
  }
  if (state === 'in-progress') {
    return (
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className="startButton"
          disabled={ verify }
          onClick={ () => setDoneRecipe() }
        >
          Finalizar receita
        </button>
      </Link>
    );
  }
  return (
    <Link to="/receitas-feitas">
      <button
        type="button"
        className="startButton"
      >
        Receita Finalizada
      </button>
    </Link>
  );
}

RecipeButton.propTypes = {
  recipe: PropTypes.isRequired,
  state: PropTypes.string.isRequired,
};
