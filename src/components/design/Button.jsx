/* eslint-disable */

import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '../../hooks';

const Button = ({ children, variant = 'primary', isSubmit, ...props }) => {
  const { colors } = useTheme();

  const variantsColors = {
    primary: colors.primary,
  };

  return (
    <button
      style={ {
        backgroundColor: variantsColors[variant],
        borderRadius: '8px',
        border: 'none',
        fontSize: '1rem',
        padding: '12px 16px',
      } }
      type={ isSubmit ? 'submit' : 'button' }
      { ...props }
    >
      { children }
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isSubmit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
