import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import Footer from '../components/Footer';

export default function Drinks() {
  const qty = 12;
  const recipes = useSelector((state) => state.Mechanics.searcResults);
  return (
    <main>
      <Header
        title="Bebidas"
        haveSearchBtn
        searchTrigger="thecocktaildb"
      />
      <div>
        {
          recipes.drinks !== null && recipes.drinks !== undefined
            ? recipes.drinks.slice(0, qty).map((recipe, index) => (
              <RenderRecipes
                key={ index }
                title={ recipe.strDrink }
                index={ index }
                srcImage={ recipe.strDrinkThumb }
              />))
            : ''
        }
      </div>
      <Footer />
    </main>
  );
}
