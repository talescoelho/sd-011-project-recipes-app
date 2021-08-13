import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import { fetchDrinksDetails, fetchFoods } from '../services/API';
import '../styles/DrinksDetails.css';
import ingredients from '../helpers/ingredientsMealDetails';
import FoodsRecomendations from '../components/FoodsRecomendations';
import { getStorage } from '../helpers/Storage';
import ShareAndFavButtons from '../components/subcomponents/ShareAndFavButtons';

function DrinksDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({ id });
  const [recomendations, setRecomendations] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const foodDetails = async (drinkId) => {
      const fetchedDetails = await fetchDrinksDetails(drinkId);
      setDetails(fetchedDetails);
      setLoading(false);
    };
    foodDetails(id);
  }, [id, setLoading]);

  useEffect(() => {
    const foodsRecomendations = async () => {
      const fetchedRecomendations = await fetchFoods();
      setRecomendations(fetchedRecomendations);
    };
    foodsRecomendations();
  }, []);

  useEffect(() => {
    const doneRecipes = getStorage('doneRecipes');
    doneRecipes.forEach((recipe) => { if (recipe.id === id) { setDoneRecipe(true); } });

    const { cocktails } = getStorage('inProgressRecipes');
    if (cocktails && Object.keys(cocktails).includes(id)) {
      setInProgressRecipe(true);
    }
  }, [id]);

  const ingredientsAndMeasures = details.idDrink
    ? ingredients(details) : [];

  return (
    <div className="details-container">
      {loading ? (
        <ReactBootStrap.Spinner animation="border" />
      )
        : (
          <>
            <img
              src={ details.strDrinkThumb }
              alt="Detalhe da bebida"
              data-testid="recipe-photo"
            />
            <div className="details-header">
              <div>
                <h3 data-testid="recipe-title">{details.strDrink}</h3>
                <span data-testid="recipe-category">{details.strAlcoholic}</span>
              </div>
              <ShareAndFavButtons details={ details } />
            </div>
            <div className="ingredients-container">
              <span>Ingredients</span>
              <ul>
                {ingredientsAndMeasures.map((ingredient, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="instructions-container">
              <span>Instruções</span>
              <p data-testid="instructions">{details.strInstructions}</p>
            </div>
            <div className="recomendation-container">
              <span>Recomendadas</span>
              <FoodsRecomendations recomendations={ recomendations } />
            </div>
          </>)}
      {!doneRecipe && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => history.push(`/bebidas/${id}/in-progress`) }
        >
          {inProgressRecipe ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>)}
    </div>
  );
}

export default DrinksDetails;
