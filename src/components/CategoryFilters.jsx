import React, { useContext } from 'react';
import CategoryButton from './CategoryButton';
import RecipesContext from '../context/RecipesContext';

import '../styles/CategoryFilters.css';

function CategoryFilters() {
  const { categorysList } = useContext(RecipesContext);
  const firstCategorys = Object.values(categorysList).slice(0, 5);
  return (
    <div className="categoryFilterContainer">
      <CategoryButton categoryName={ 'All' } />
      {
        firstCategorys.map(({ strCategory }) => (
          <CategoryButton key={ strCategory } categoryName={strCategory} />
        ))
      }
    </div>
  );
}

export default CategoryFilters;
