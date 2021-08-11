import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import { fetchCategoryDrink, getDrink } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);
  const [drinkCategories, setdrinkCategories] = useState([]);

  const searchCards = async () => {
    const response = await getDrink();
    setCards(response.drinks);
  };

  const fetchCategoryButtons = async () => {
    const response = await fetchCategoryDrink();
    const maxList = 5;
    const categoryListDrink = response.drinks.slice(0, maxList);
    const getListValues = categoryListDrink.map((drink) => Object.values(drink));
    return (
      getListValues,
      setdrinkCategories(getListValues)
    );
    // return getListValues.map((item, index) => <button type="button" key={ index }>{item}</button>);
  };

  useEffect(() => {
    searchCards();
    fetchCategoryButtons();
  }, []);

  const renderCardRecipes = () => {
    const showMaxRecipes = 12;
    if (cards) {
      const filteredRecipe = cards.filter(
        (drinks, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  return (
    <div>
      <Header className="title" title="Bebidas" searchIconAppears />
      <div>
        {drinkCategories.map((item, index) => <button type="button" key={ index }>{item}</button>)}
      </div>
      {/* {drinkCategories.map((item, index) => <button type="button" key={ index }>{item}</button>)} */}
      <div className="cardlist">
        {cards.length > 0 && renderCardRecipes().map((recp, index) => (
          <Link
            className="link"
            key={ index }
            to={ {
              pathname: `/bebidas/${recp.idDrink}`,
            } }
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strDrinkThumb }
              title={ recp.strDrink }
            />
          </Link>))}
      </div>
      <Footer />
    </div>
  );
}
