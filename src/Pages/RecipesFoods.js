import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const { recipe } = useContext(MyContext);

  const renderCardRecipes = () => {
    const showMaxRecipes = 12;

    if (recipe.meals) {
      const filteredRecipe = recipe.meals.filter(
        (meals, index) => index < showMaxRecipes,
      );
      return filteredRecipe.map((recp, index) => (
        <CardRecipes
          key={ index }
          index={ index }
          thumb={ recp.strMealThumb }
          title={ recp.strMeal }
        />
      ));
    }
  };

  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      {renderCardRecipes()}
      <Footer />
    </div>
  );
}
