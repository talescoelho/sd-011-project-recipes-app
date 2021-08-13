import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Header from '../components/Header';
import { fetchFoodCards } from '../Redux/reducers/recipes';
import fetchDrinkIngredients from '../services/DrinkIngredientAPI';
import '../styles/Ingredients.css';
import Footer from '../components/Footer';

export default function DrinkIngredients() {
  const dispatch = useDispatch();
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const numberTwelve = 12;
  const history = useHistory();

  useEffect(() => {
    const getIngredients = async () => {
      const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const results = await fetch(endpoint).then((data) => data.json());
      const { drinks } = results;
      setDrinkIngredients(drinks);
    };

    getIngredients();
  }, []);

  const renderFilteredIngredients = async (ingredient) => {
    const drinkByIngredient = await fetchDrinkIngredients(ingredient);
    const { drinks } = drinkByIngredient;
    dispatch(fetchFoodCards({ filtered: drinks, selectedCategory: 'drinks' }));
    dispatch({ type: 'CLEAR_FORM_INFO' });
    history.push('/bebidas');
  };

  const renderDrink = () => (
    drinkIngredients.map((ingredient, index) => (
      index < numberTwelve ? (
        <button
          className="ingredient-button"
          type="button"
          onClick={ () => renderFilteredIngredients(ingredient.strIngredient1) }
        >
          <Card data-testid={ `${index}-ingredient-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt={ ingredient.strIngredient1 }
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
          </Card>
        </button>
      ) : null
    ))
  );

  return (
    <div>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Drink Ingredients</h1>
      {renderDrink()}
      <Footer />
    </div>
  );
}
