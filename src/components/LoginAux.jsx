import React from 'react';
import PropTypes from 'prop-types';

const LoginAux = ({ id, label, setValue, ...props }) => (
  <>
    <label htmlFor={ id }>{label}</label>
    <input
      id={ id }
      name={ id }
      onChange={ ({ target }) => setValue(target.value) }
      { ...props }
    />
  </>
);

LoginAux.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default LoginAux;
