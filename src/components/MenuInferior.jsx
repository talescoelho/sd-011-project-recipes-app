import React from 'react';
import { Link } from 'react-router-dom';

function MenuInferior() {
  return (
    <div data-testid="footer">
      <Link to="/">
        <img
          src="./images/drinklcon"
          alt="drink"
          data-testid="drinks-bottom-btn"
          type="button"
        />
      </Link>
    </div>
  );
}

export default MenuInferior;
