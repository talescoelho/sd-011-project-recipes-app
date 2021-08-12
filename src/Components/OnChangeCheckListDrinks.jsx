import React, { useContext /* , useState */ } from 'react';
import MainContext from '../Context/MainContext';

function OnChangeCheckListDrinks() {
  const {
    setCount, DetailsIngredFilterForDrinks, doneRecipes,
    selected, setSelected, startButton, DetailsMeasFilterForDrinks,
  } = useContext(MainContext);

  function onChange(event) {
    if (event.target.checked) {
      setSelected(selected + 1);
    } else {
      setSelected(selected - 1);
    }
    if (startButton && selected === DetailsIngredFilterForDrinks.length - 1) {
      setCount(true);
      localStorage.setItem('doneRecipes', doneRecipes);
    } else {
      setCount(false);
    }
  }
  return (
    <ul>
      { startButton && DetailsIngredFilterForDrinks.map((ing, i) => (
        <section
          key={ i }
          data-testid={ `${i}-ingredient-name-and-measure` }
        >
          <div className="toppings-list-item">
            <div className="left-section">
              <input
                type="checkbox"
                id={ ing }
                name={ ing }
                value={ ing }
                onChange={ (event) => onChange(event) }
              />
              <label htmlFor={ ing }>
                { ing }
                {' '}
                -
                { ' ' }
                { DetailsMeasFilterForDrinks.map((mea, ind) => i === ind && (mea)) }
              </label>
            </div>
          </div>
        </section>
      )) }
    </ul>
  );
}

export default OnChangeCheckListDrinks;
