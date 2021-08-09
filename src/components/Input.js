import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ id, label, setValue, labelClass, ...props }) => (
  <>
    <label htmlFor={ id } className={ labelClass }>{label}</label>
    <input
      id={ id }
      name={ id }
      onChange={ ({ target }) => setValue(target.value) }
      { ...props }
    />
  </>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  labelClass: PropTypes.string.isRequired,
};

export default Input;
