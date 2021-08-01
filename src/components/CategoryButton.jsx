import React from 'react';

function CategoryButton({ categoryName }) {
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
    >
      { categoryName }
    </button>
  );
}

export default CategoryButton;
