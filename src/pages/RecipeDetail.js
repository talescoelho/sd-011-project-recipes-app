import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail, fetchRecommended } from '../actions/recipeDetail_actions';
import RecipeDetailMain from '../components/RecipeDetailMain';
import RecipesRecommended from '../components/RecipesRecommended';
import '../index.css';
import { getFromStorage, setToStorage } from '../helpers/utils';

function RecipeDetail({ history: { push, location: { pathname } },
  dispatchFetchDetail, dispatchFetchRecommended, recipeDetail, recipesRecommended }) {
  const { id } = useParams();
  const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';
  const recipesDone = getFromStorage('doneRecipes') || [];
  // const [isInProgress, setIsInProgress] = React.useState(null);

  function verifyRecipeInProgress() { // Req 40
    const inProgressRecipes = getFromStorage('inProgressRecipes') || [];
    // const statusRecipe = Object.prototype.hasOwnProperty.call(inProgressRecipes, id);
    return Object.prototype.hasOwnProperty.call(inProgressRecipes, id);
    // setIsInProgress(statusRecipe);
  }

  React.useEffect(verifyRecipeInProgress, [id]); // Req 40

  const addStepToStorage = () => { // Req 40
    const recipesInProgress = getFromStorage('inProgressRecipes') || {};
    const updatedItem = {
      ...recipesInProgress,
      [id]: [],
    };
    setToStorage('inProgressRecipes', updatedItem);
    // dispatchUpdateInProgress(updatedItem);
  };

  React.useEffect(addStepToStorage, [id]); // Req 40

  React.useEffect(() => {
    dispatchFetchRecommended(type);
  }, [dispatchFetchRecommended, type]);

  React.useEffect(() => {
    dispatchFetchDetail(type, id);
  }, [dispatchFetchDetail, type, id]);

  function verifyRecipeDone() { // Req 39
    return recipesDone.some((item) => (item.id === id));
  }

  function redrectToRecipeInProgress() {
    push(`${pathname}/in-progress`);
  }

  function handleStartContinueBtn() {
    // addStepToStorage();
    redrectToRecipeInProgress();
  }

  return (
    <div className="recipe-detail">
      <RecipeDetailMain
        recipeDetail={ recipeDetail }
      />
      <RecipesRecommended recipesRecommended={ recipesRecommended } />
      <button
        data-testid="start-recipe-btn"
        className="fixedBottom"
        type="button"
        onClick={ handleStartContinueBtn }
        hidden={ verifyRecipeDone() }
      >
        {/* { isInProgress ? 'Continuar Receita' : 'Iniciar receita' } */}
        { verifyRecipeInProgress() ? 'Continuar Receita' : 'Iniciar receita'}
      </button>
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer,
  recommendedsReducer, selectedRecipeReducer: { inProgress } }) => ({
  recipeDetail: recipeDetailReducer.detail,
  recipesRecommended: recommendedsReducer.recommended,
  inProgress,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDetail: (type, id) => dispatch(fetchRecipeDetail(type, id)),
  dispatchFetchRecommended: (type) => dispatch(fetchRecommended(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);

RecipeDetail.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    push: PropTypes.func,
  }),
  recipeDetail: PropTypes.object,
  dispatchFetchDetail: PropTypes.func,
  dispatchFetchRecommended: PropTypes.func,
  recipesRecommended: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
