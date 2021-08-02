import React, { useState, useEffect } from 'react';

function ButtonStart({ detail, typeDrinkorMeal }) {
  const { idItem } = detail;
  const [buttonStart, setButtonStart] = useState(false);
  const [buttonContinue, setButtonContinue] = useState(false);

  useEffect(() => {
    function checkRecipes() {
      const recipesLocalstorage = JSON.parse(localStorage.getItem('doneRecipes'));
      if (recipesLocalstorage !== null) {
        recipesLocalstorage.forEach((element) => element.id === idItem
          && setButtonStart(true));
      }
      const continuerecipesLocalstorage = JSON.parse(
        localStorage.getItem('inProgressRecipes'),
      );

      const typeDoM = typeDrinkorMeal === 'comidas' ? 'meals' : 'cocktails';
      if (continuerecipesLocalstorage !== null) {
        Object.keys(continuerecipesLocalstorage[typeDoM]).forEach((idItemEdit) => (
          idItemEdit === idItem && setButtonContinue(true)
        ));
      }
    }
    checkRecipes();
  }, [idItem, typeDrinkorMeal]);

  function startRecipes() {
    // const teste = JSON.parse(localStorage.getItem('doneRecipes'));
    // const type = typeDoM === 'comidas' ? 'comida' : 'bebida';
    // if (teste === null) {
    //   localStorage.setItem('doneRecipes', JSON.stringify([
    //     {
    //       id: idItem,
    //       type,
    //       area: '',
    //       category: alcoholic,
    //       alcoholicOrNot: category,
    //       name: title,
    //       image: imgThumb,
    //       doneDate: new Date(),
    //       tags: [],
    //     },
    //   ]));
    // } else {
    //   const recipesLocalstorage = JSON.parse(localStorage.getItem('doneRecipes'));
    //   localStorage.setItem('doneRecipes', JSON.stringify([
    //     ...recipesLocalstorage,
    //     {
    //       id: idItem,
    //       type,
    //       area: '',
    //       category: alcoholic,
    //       alcoholicOrNot: category,
    //       name: title,
    //       image: imgThumb,
    //       doneDate: new Date(),
    //       tags: [],
    //     },
    //   ]));
    //   localStorage.setItem('inProgressRecipes', JSON.stringify({
    //     meals: {
    //       52771: [],
    //     },
    //     cocktails: {
    //       178319: [],
    //     },
    //   }));
    // }
  }

  function btnStart() {
    return (
      <button
        className="buttonSart"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ startRecipes }
      >
        { buttonContinue ? 'Continuar Receita' : 'Iniciar Receita' }
      </button>
    );
  }
  // Continuar Receita
  return (
    buttonStart === false && btnStart()
  );
}

export default ButtonStart;
