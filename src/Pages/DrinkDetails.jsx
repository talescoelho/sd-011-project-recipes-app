import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DrinkDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    console.log(state);
    return (
      <div>
        a
      </div>
    );
  }
}

DrinkDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(),
  }),
}.isRequired;
