
import React, { useEffect, useState } from 'react';
import CardRecipes from '../Components/CardRecipes';
import { Link, useHistory } from 'react-router-dom';

export default function RecomendedRecipes(props) {
const [recipes, setRecipes] = useState([]);
    
  useEffect(() => {
  
    if(useHistory.pathname === '/drink-detail'){
    const getApi = async () => {
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(endPoint);
      const results = await response.json();
      const { meals } = results;
      setRecipes(meals);
      const index2 = "Meal";
    };
    getApi();}
    if(useHistory.pathname === '/details-recipe'){
    const getApi = async () => {
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(endPoint);
      const results = await response.json();
      const { drink } = results;
      setRecipes(drink);
      const index2 = "Drink"
    };
    getApi();
    }
    }, []);
    const renderCardRecipes = () => {
    const showMaxRecipes = 6;
    if (recipes) {
      const filteredRecipe = recipes.filter(
        (meals, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
    };
  return(
  <div className="recomended">
    {renderCardRecipes().map((recp, index) => (
      <Link 
        className="link"
        key={ index }
        to="/details-recipe"
      >
        <CardRecipes
          key={ index }
          index={ index }
          //thumb={ recp.str+('index2')+Thumb }
          //title={ recp.str+('index2') }
        />
      </Link>))}
  </div>
    
  )
}
