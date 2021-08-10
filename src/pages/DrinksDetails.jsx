import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
/* import RecipesContext from '../context/RecipesContext'; */
import { fetchDrinksDetails, fetchFoods } from '../services/API';
import '../styles/DrinksDetails.css';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import ingredientsDrinkDetails from '../helpers/ingredientsDrinkDetails';
import FoodsRecomendations from '../components/FoodsRecomendations';
import { setStorage, getStorage, newFavoriteRecipes } from '../helpers/Storage';

function DrinksDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [linkCopied, setLinkCopied] = useState('');
  const [favorited, setFavorited] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

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
    const favorites = getStorage('favoriteRecipes');
    favorites.forEach((favorite) => { if (favorite.id === id) { setFavorited(true); } });
  }, [id]);

  const ingredientsAndMeasures = details.idDrink
    ? ingredientsDrinkDetails(details) : [];

  function copyUrlToClipboard() {
    setLinkCopied('Link copiado!');
    // verificar possibilidade de obter a url completa para qualquer servidor
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  }

  const addOrRemoveFavoriteRecipe = () => {
    const favoriteRecipes = getStorage('favoriteRecipes');
    if (favoriteRecipes.some((recipe) => recipe.id === id)) {
      setFavorited(false);
      setStorage('favoriteRecipes', favoriteRecipes.filter((recipe) => recipe.id !== id));
    } else {
      const newFavoriteRecip = newFavoriteRecipes(details, 'bebida');
      setFavorited(true);
      setStorage('favoriteRecipes', [...favoriteRecipes, newFavoriteRecip]);
    }
  };

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
                <span data-testid="recipe-title">{details.strDrink}</span>
                <span data-testid="recipe-category">{details.strAlcoholic}</span>
              </div>
              <div>
                {linkCopied}
                <button
                  type="button"
                  data-testid="share-btn"
                  onClick={ () => copyUrlToClipboard() }
                >
                  <img src={ shareIcon } alt="Botão compartilhar" />
                </button>
                <button
                  type="button"
                  data-testid="favorite-btn"
                  src={ favorited ? blackHeartIcon : whiteHeartIcon }
                  onClick={ () => addOrRemoveFavoriteRecipe() }
                >
                  <img
                    src={ favorited ? blackHeartIcon : whiteHeartIcon }
                    alt="Botão favoritar"
                  />
                </button>
              </div>
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
      <button
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => history.push(`/bebidas/${id}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DrinksDetails;
