import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import { getFoodCard } from '../Redux/actions/index';
import fetchIngredients from '../services/FoodIngredientAPI';

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
    dispatch(getFoodCard({ filtered: meals }));
    history.push('/comidas');
  };

  const renderMealt = () => (
    foodIngredients.map((ingredient, index) => (
      index < numberTwelve ? (
        <button
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
    <div>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Mealt Ingredients</h1>
      {renderMealt()}
    </div>
  );
}
