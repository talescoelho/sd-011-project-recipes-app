import React from 'react';
import CategoryButton from './CategoryButton';
import '../styles/CategoryFilters.css';

function CategoryFilters() {
  return (
    <div className="categoryFilterContainer">
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
    </div>
  );
}

export default CategoryFilters;
