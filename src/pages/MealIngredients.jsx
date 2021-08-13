import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Header from '../components/Header';
import { fetchFoodCards } from '../Redux/reducers/recipes';
import fetchIngredients from '../services/FoodIngredientAPI';
import '../styles/Ingredients.css';
import Footer from '../components/Footer';

export default function MealtIngredients() {
  const dispatch = useDispatch();
  const [foodIngredients, setFoodIngredients] = useState([]);
  const numberTwelve = 12;
  const history = useHistory();

  useEffect(() => {
    const getIngredients = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const results = await fetch(endpoint).then((data) => data.json());
      const { meals } = results;
      setFoodIngredients(meals);
    };

    getIngredients();
  }, []);

  const renderFilteredIngredients = async (ingredient) => {
    const foodByIngredient = await fetchIngredients(ingredient);
    const { meals } = foodByIngredient;
    dispatch(fetchFoodCards({ filtered: meals, selectedCategory: 'meals' }));
    dispatch({ type: 'CLEAR_FORM_INFO' });
    history.push('/comidas');
  };

  const renderMealt = () => (
    foodIngredients.map((ingredient, index) => (
      index < numberTwelve ? (
        <button
          className="ingredient-button"
          type="button"
          onClick={ () => renderFilteredIngredients(ingredient.strIngredient) }
        >
          <Card
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              alt={ ingredient.strIngredient }
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </Card>
        </button>
      ) : null
    ))
  );

  return (
    <>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Mealt Ingredients</h1>
      {renderMealt()}
      <Footer />
    </>
  );
}
