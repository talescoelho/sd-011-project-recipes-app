import React from 'react';
import { connect } from 'react-redux';

class FinishRecipeButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        disabled
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    );
  }
}

export default connect()(FinishRecipeButton);
