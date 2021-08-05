import React, { useContext } from 'react';
import Header from '../Components/Header';
import CardRecipes from '../Components/CardRecipes';
import MyContext from '../Context/MyContext';
import Footer from '../Components/Footer';

export default function RecipesDrinks() {
  const { recipe } = useContext(MyContext);

  const renderCardRecipes = () => {
    const showMaxRecipes = 12;

    if (recipe.drinks) {
      const filteredRecipe = recipe.drinks.filter(
        (drink, index) => index < showMaxRecipes,
      );
      return filteredRecipe.map((recp, index) => (
        <CardRecipes
          key={ index }
          index={ index }
          thumb={ recp.strDrinkThumb }
          title={ recp.strDrink }
        />
      ));
    }
  };

  return (
    <div>
      <Header className="title" title="Bebidas" searchIconAppears />
      {renderCardRecipes()}
      <Footer />
    </div>
  );
}
