import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail, fetchRecommended } from '../actions/recipeDetail_actions';
import RecipeDetailMain from '../components/RecipeDetailMain';

function RecipeDetail({ history: { location: { pathname } },
  dispatchFetchDetail, dispatchFetchRecommended, recipeDetail, recipeRecommended }) {
  const { id } = useParams();
  const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';

  React.useEffect(() => {
    dispatchFetchRecommended(type);
  }, [dispatchFetchRecommended, type]);

  React.useEffect(() => {
    dispatchFetchDetail(type, id);
  }, [dispatchFetchDetail, dispatchFetchRecommended, type, id]);

  return (
    <div>
      <RecipeDetailMain
        recipeDetail={ recipeDetail }
        recipeRecommended={ recipeRecommended }
      />
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer, recommendedsReducer }) => ({
  recipeDetail: recipeDetailReducer.detail,
  recipeRecommended: recommendedsReducer.recommended,
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
}.isRequired;
