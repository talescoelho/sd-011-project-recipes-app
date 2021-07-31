import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipeDetailsAPIAction } from '../redux/actions';

function MealDetails({ fetch }) {
  useEffect(() => {
    const getMealDetails = async () => {
      await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53014');
    };
    getMealDetails();
  }, [fetch]);

  return (
    <div>
      Detalhes
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetch: (url) => dispatch(fetchRecipeDetailsAPIAction(url)),
});

MealDetails.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(MealDetails);
