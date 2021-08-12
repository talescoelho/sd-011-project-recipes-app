import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardRecipes from '../Components/CardRecipes';
import './RecipesFoods.css';
import { getFood } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);

  const busca = async () => {
    const resposta = await getFood();
    setCards(resposta.meals);
    }
  useEffect(() => {
    busca();
  }, []);

    const renderCardRecipes = () => {
    const showMaxRecipes = 12;
    if (cards) {
      const filteredRecipe = cards.filter(
        (meals, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      <div className="cardlist">
        {cards.length>0 && renderCardRecipes().map((recp, index) => (
          <Link 
            className="link"
            key={ index }
            to="/details-recipe"
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strMealThumb }
              title={ recp.strMeal }
              className={ `card${index}`}
            />
            { console.log(index) }
          </Link>))}
      </div>
      <Footer />
    </div>
  );
}
