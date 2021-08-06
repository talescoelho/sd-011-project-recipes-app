import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMealDetails } from '../redux/actions/recipeDetailsActions';

const FoodDetails = (
  {
    dispatch,
    match: { params: { id } },
    // mealDetails,
    loading,
    error,
  },
) => {
  useEffect(() => {
    dispatch(requestMealDetails(id));
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (<div>Erro</div>);
  }

  if (loading) {
    return (<div>Loading...</div>);
  }

  return (<div>Pagina de Detalhe de Comida</div>);
};

FoodDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // mealDetails: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FoodDetails.defaultProps = {
  // mealDetails: {},
  error: null,
};

const mapStateToProps = (state) => ({
  mealDetails: state.recipeDetailsReducer.meal,
  loading: state.recipeDetailsReducer.isLoading,
  error: state.recipeDetailsReducer.error,
});

export default connect(mapStateToProps)(FoodDetails);
