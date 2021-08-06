import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestDrinkDetails } from '../redux/actions/recipeDetailsActions';

const DrinkDetails = (
  {
    dispatch,
    match: { params: { id } },
    // drinkDetails,
    loading,
    error,
  },
) => {
  useEffect(() => {
    dispatch(requestDrinkDetails(id));
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (<div>Erro</div>);
  }

  if (loading) {
    return (<div>Loading...</div>);
  }

  return (
    <div>Pagina de Detalhe de Comida</div>
  );
};

DrinkDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // drinkDetails: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

DrinkDetails.defaultProps = {
  // drinkDetails: {},
  error: null,
};

const mapStateToProps = (state) => ({
  drinkDetails: state.recipeDetailsReducer.drink,
  loading: state.recipeDetailsReducer.isLoading,
  error: state.recipeDetailsReducer.error,
});

export default connect(mapStateToProps)(DrinkDetails);
