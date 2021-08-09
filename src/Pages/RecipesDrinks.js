import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
// import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(endPoint);
      const results = await response.json();
      const { drinks } = results;
      setRecipes(drinks);
    };
    getApi();
  }, []);
  const renderCardRecipes = () => {
    const showMaxRecipes = 12;
    if (recipes) {
      const filteredRecipe = recipes.filter(
        (drinks, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  return (
    <div>
      <Header className="title" title="Bebidas" searchIconAppears />
      <div className="cardlist">
      {renderCardRecipes().map((recp, index) => (
        //  <
        //  className="link"
        //  to={ {
        //   pathname: '/bebidas/drink-details',
        //   state: ({
        //     idDrink,
        //     strDrink,
        //     strAlcoholic,
        //     strInstructions,
        //     strDrinkThumb,
        //  }),
        // } }
         <CardRecipes
          key={ index }
          index={ index }
          thumb={ recp.strDrinkThumb }
          title={ recp.strDrink }
          />
          ))}  
      </div>
      <Footer />
    </div>
  );
}
