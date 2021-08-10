import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
/* import RecipesContext from '../context/RecipesContext'; */
import { fetchFoodDetails, fetchDrinks } from '../services/API';
import '../styles/FoodsDetails.css';
/* import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg'; */
import ingredientsMealDetails from '../helpers/ingredientsMealDetails';
import DrinksRecomendations from '../components/DrinksRecomendations';
/* import { getStorage, setStorage, newFavoriteRecipes } from '../helpers/Storage'; */
import { getStorage } from '../helpers/Storage';
import ShareAndFavButton from '../components/subcomponents/ShareAndFavButton';

function FoodsDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({ id });
  const [recomendations, setRecomendations] = useState([]);
  /* const [linkCopied, setLinkCopied] = useState('');
  const [favorited, setFavorited] = useState(false); */
  const [doneRecipe, setDoneRecipe] = useState(false);
  const history = useHistory();
  /* const { location: { pathname } } = history; */

  useEffect(() => {
    const foodDetails = async (foodId) => {
      const fetchedDetails = await fetchFoodDetails(foodId);
      setDetails(fetchedDetails);
      setLoading(false);
    };
    foodDetails(id);
  }, [id, setLoading]);

  useEffect(() => {
    const drinksRecomendations = async () => {
      const fetchedRecomendations = await fetchDrinks();
      setRecomendations(fetchedRecomendations);
    };
    drinksRecomendations();
  }, []);

  useEffect(() => {
    /* const favorites = getStorage('favoriteRecipes');
    favorites.forEach((favorite) => { if (favorite.id === id) { setFavorited(true); } }); */
    const doneRecipes = getStorage('doneRecipes');
    doneRecipes.forEach((recipe) => { if (recipe.id === id) { setDoneRecipe(true); } });
  }, [id]);

  const ingredientsAndMeasures = details.idMeal
    ? ingredientsMealDetails(details)
    : [];

  /* function videoSrc(youtubeLink) {
    const [partialLink, watchID] = youtubeLink.split('.com/');
    const videoID = watchID.split('?v=')[1];
    return `${partialLink}.com/embed/${videoID}`;
  } */

  function videoSrc(youtubeLink) {
    return youtubeLink.replace('watch?v=', 'embed/');
  }

  /* function copyUrlToClipboard() {
    setLinkCopied('Link copiado!');
    // verificar possibilidade de obter a url completa para qualquer servidor
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  } */

  /* const addOrRemoveFavoriteRecipe = () => {
    const favoriteRecipes = getStorage('favoriteRecipes');
    if (favoriteRecipes.some((recipe) => recipe.id === id)) {
      setFavorited(false);
      setStorage('favoriteRecipes', favoriteRecipes.filter((recipe) => recipe.id !== id));
    } else {
      setFavorited(true);
      const newFavoriteRecip = newFavoriteRecipes(details, 'comida');
      setStorage('favoriteRecipes', [...favoriteRecipes, newFavoriteRecip]);
    }
  }; */

  return (
    <div className="details-container">
      {loading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <>
          <img
            src={ details.strMealThumb }
            alt="Detalhe da comida"
            data-testid="recipe-photo"
          />
          <div className="details-header">
            <div>
              <span data-testid="recipe-title">{details.strMeal}</span>
              <span data-testid="recipe-category">{details.strCategory}</span>
            </div>
            <ShareAndFavButton details={ details } />
            {/* <div>
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
            </div> */}
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
          <div className="video-container">
            <span>Video</span>
            <iframe
              data-testid="video"
              width="340"
              height="240"
              src={ videoSrc(details.strYoutube) }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="recomendation-container">
            <span>Recomendadas</span>
            <DrinksRecomendations recomendations={ recomendations } />
          </div>
        </>
      )}
      {!doneRecipe && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => history.push(`/comidas/${id}/in-progress`) }
        >
          Iniciar Receita
        </button>)}
    </div>
  );
}

export default FoodsDetails;
