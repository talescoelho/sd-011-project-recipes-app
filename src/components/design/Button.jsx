/* eslint-disable */

import React from 'react';
import { useTheme } from '../../hooks';

export const Button = ({ children, variant = 'primary', isSubmit, ...props }) => {
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
