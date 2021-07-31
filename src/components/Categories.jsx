import React, { useContext } from 'react';
import RecipesAppContext from '../context/RecipesAppContext';
import '../styles/Categories.css';

export default function Categories() {
  const { categories } = useContext(RecipesAppContext);
  const limit = 5;
  const firstFiveCategories = categories.filter((item, index) => index < limit);

  return (
    <section className="categories-section">
      <button type="button">ALL</button>
      { firstFiveCategories.map((category, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${category.strCategory}-category-filter` }
        >
          { category.strCategory }
        </button>
      ))}
    </section>
  );
}
