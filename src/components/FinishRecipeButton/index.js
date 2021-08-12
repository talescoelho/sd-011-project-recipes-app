import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FinishRecipeButton extends React.Component {
  render() {
    const { id, ingredients, inProgress, history } = this.props;

    return (
      <button
        type="button"
        onClick={ () => history.push('/receitas-feitas') }
        disabled={ !(inProgress[id] && inProgress[id].length === ingredients.length) }
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    );
  }
}

const mapStateToProps = ({ selectedRecipeReducer: { ingredients, inProgress } }) => ({
  ingredients,
  inProgress,
});

export default connect(mapStateToProps)(withRouter(FinishRecipeButton));

FinishRecipeButton.defaultProps = {
  ingredients: [],
  inProgress: {},
};

FinishRecipeButton.propTypes = {
  id: PropTypes.number,
}.isRequired;
