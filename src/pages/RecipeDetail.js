import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from '../actions';
import RecipeDetailMain from '../components/RecipeDetailMain';

function RecipeDetail({ history: { location: { pathname } },
  dispatchFetchDetail, recipeDetailMeal, recipeDetailDrink }) {
  const { id } = useParams();

  React.useEffect(() => {
    const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';
    dispatchFetchDetail(type, id);
  }, [id, pathname, dispatchFetchDetail]);

  return (
    <div>
      {pathname === `/comidas/${id}`
        ? <RecipeDetailMain path="comidas" recipeDetail={ recipeDetailMeal } />
        : <RecipeDetailMain path="bebidas" recipeDetail={ recipeDetailDrink } /> }
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer }) => ({
  recipeDetailMeal: recipeDetailReducer.meal.detail,
  recipeDetailDrink: recipeDetailReducer.drink.detail,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDetail: (type, id) => dispatch(fetchRecipeDetail(type, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);

RecipeDetail.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
  recipeDetailMeal: PropTypes.object,
  recipeDetailDrink: PropTypes.object,
  dispatchFetchDetail: PropTypes.func,
}.isRequired;
