import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from '../actions/recipeDetail_actions';
import RecipeDetailMain from '../components/RecipeDetailMain';

function RecipeDetail({ history: { location: { pathname } },
  dispatchFetchDetail, recipeDetail }) {
  const { id } = useParams();
  const type = pathname.includes('comidas') ? 'comidas' : 'bebidas';

  React.useEffect(() => {
    dispatchFetchDetail(type, id);
  }, [dispatchFetchDetail, type, id]);

  return (
    <div>
      <RecipeDetailMain recipeDetail={ recipeDetail } />
    </div>
  );
}

const mapStateToProps = ({ recipeDetailReducer }) => ({
  recipeDetail: recipeDetailReducer.detail,
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
  recipeDetail: PropTypes.object,
  dispatchFetchDetail: PropTypes.func,
}.isRequired;
