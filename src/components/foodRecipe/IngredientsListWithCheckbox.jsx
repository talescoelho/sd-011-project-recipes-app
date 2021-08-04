import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

const IngredientsListWithCheckbox = ({ ingredients }) => (
  <ul>
    { ingredients.map((ingredient) => <li>{ ingredient }</li>)}
  </ul>
);

IngredientsListWithCheckbox.propTypes = ({
  ingredients: arrayOf(PropTypes.string),
}).isRequired;

export default IngredientsListWithCheckbox;
