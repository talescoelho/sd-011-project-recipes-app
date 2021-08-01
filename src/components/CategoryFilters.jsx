import React, { useContext } from 'react';
import CategoryButton from './CategoryButton';
import RecipesContext from '../context/RecipesContext';

import '../styles/CategoryFilters.css';

function CategoryFilters() {
  const { categorysList, setCurrentCategory } = useContext(RecipesContext);
  return (
    <div className="categoryFilterContainer">
      <CategoryButton categoryName={ 'All' } />
      <CategoryButton categoryName={ 'Beef' } />
    </div>
  );
}

export default CategoryFilters;
