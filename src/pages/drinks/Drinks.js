import React, { useContext } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import { RecipesContext } from '../../context/RecipesContext';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function Drinks() {
  const {
    drinksFiltered, drinkCategories, drinksFilter, setDrinksFilter,
  } = useContext(RecipesContext);

  const onClickDrinkFilter = (clickedCategory) => {
    if (clickedCategory === drinksFilter) {
      setDrinksFilter('');
    } else {
      setDrinksFilter(clickedCategory);
    }
  };

  return (
    <main>
      <Header title="Bebidas" search />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <section>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => onClickDrinkFilter('') }
        >
          All
        </button>
        { drinkCategories.length > 0 && drinkCategories.map((cat) => (
          <button
            type="button"
            key={ cat.strCategory }
            data-testid={ `${cat.strCategory}-category-filter` }
            onClick={ () => onClickDrinkFilter(cat.strCategory) }
          >
            {cat.strCategory}
          </button>
        ))}
      </section>
      <section>
        { drinksFiltered.length > 0 && drinksFiltered.map((recipe, index) => (
          <RecipeCard recipe={ recipe } index={ index } type="Drink" key={ index } />
        ))}
      </section>
      <Footer />
    </main>
  );
}
