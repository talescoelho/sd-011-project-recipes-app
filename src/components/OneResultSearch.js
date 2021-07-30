import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/GlobalContext';

function OneResultSearch(props) {
  const { catalog } = useContext(GlobalContext);
  useEffect(() => function RedirectDetails() {
    console.log(catalog.drinks[0].idMeal);
    if (catalog.drinks.length === 1 || catalog.meals.length === 1) {
      const { history: { push } } = props;
      if (catalog.meals[0].idMeal) {
        const { idMeal } = catalog[0];
        push(`/comidas/${idMeal}`);
      }
      if (catalog.drinks[0].idDrink) {
        const { idDrink } = catalog[0];
        push(`/bebidas/${idDrink}`);
      }
    }
  }, [catalog, props]);

  return (
    <div />
  );
}

OneResultSearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default OneResultSearch;
