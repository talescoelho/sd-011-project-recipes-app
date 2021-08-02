import React, { useContext } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import { RecipesContext } from '../../context/RecipesContext';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function Foods() {
  const { foodsFiltered, foodCategories, setFilter } = useContext(RecipesContext);

  return (
    <main>
      <SearchBarProvider>
        <Header title="Explorar Bebidas" search fetchType="thecocktaildb" />
      </SearchBarProvider>
      <section>
        <button
          type="button"
          data-testid="all-category-filter"
          onClick={ () => setFilter('') }
        >
          All
        </button>
        { foodCategories.length > 0 && foodCategories.map((cat) => (
          <button
            type="button"
            key={ cat.strCategory }
            data-testid={ `${cat.strCategory}-category-filter` }
            onClick={ () => setFilter(cat.strCategory) }
          >
            {cat.strCategory}
          </button>
        ))}
      </section>
      <section>
        { foodsFiltered.length > 0 && foodsFiltered.map((recipe, index) => (
          <RecipeCard recipe={ recipe } index={ index } type="Meal" key={ index } />
        ))}
      </section>
      <Footer />
    </main>
  );
}
