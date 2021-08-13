import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail, fetchRecommended } from '../actions/recipeDetail_actions';
import RecipeDetailMain from '../components/RecipeDetailMain';
import RecipesRecommended from '../components/RecipesRecommended';
import '../index.css';

function RecipeDetail({ history: { location: { pathname } },
  dispatchFetchDetail, dispatchFetchRecommended, recipeDetail, recipesRecommended }) {
  const { id } = useParams();
  const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';

  React.useEffect(() => {
    dispatchFetchRecommended(type);
  }, [dispatchFetchRecommended, type]);

  React.useEffect(() => {
    dispatchFetchDetail(type, id);
  }, [dispatchFetchDetail, type, id]);

  return (
    <div className="recipe-detail">
      <RecipeDetailMain
        recipeDetail={ recipeDetail }
      />
      <RecipesRecommended recipesRecommended={ recipesRecommended } />
      <button data-testid="start-recipe-btn" type="button"> Iniciar receita</button>
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer, recommendedsReducer }) => ({
  recipeDetail: recipeDetailReducer.detail,
  recipesRecommended: recommendedsReducer.recommended,
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
  }),
  recipeDetail: PropTypes.object,
  dispatchFetchDetail: PropTypes.func,
  dispatchFetchRecommended: PropTypes.func,
  recipesRecommended: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
