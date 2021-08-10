import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipes, fetchRecipesCategories } from '../../actions';
import getXFirstElementsFromArray from '../../helpers/utils';
import Loading from '../Loading';

const filtersQuantity = 5;

const RecipesFilterButtons = ({
  pathname, categories, type, loading, error,
  dispatchFetchRecipesCategories, dispatchFetchRecipes,
}) => {
  React.useEffect(() => {
    if (!pathname.includes(type)) {
      dispatchFetchRecipesCategories(pathname.replace(/\//g, ''));
    }
  }, [pathname, type, dispatchFetchRecipesCategories]);

  const handleCategoryClick = (category) => {
    dispatchFetchRecipes(type === 'comidas' ? 'meals' : 'drinks', category);
  };

  if (error) return <span>{`${error}`}</span>;

  return (
    <section>
      {
        loading
          ? <Loading />
          : getXFirstElementsFromArray(categories, filtersQuantity)
            .map((category) => (
              <button
                type="button"
                key={ category }
                onClick={ () => handleCategoryClick(category) }
                data-testid={ `${category}-category-filter` }
              >
                {category}
              </button>
            ))
      }
    </section>
  );
};

const mapStateToProps = ({
  recipesCategoriesReducer: { categories, type, loading, error },
}) => ({
  categories,
  type,
  loading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchRecipesCategories: (type) => dispatch(fetchRecipesCategories(type)),
  dispatchFetchRecipes:
    (type, category) => dispatch(fetchRecipes(type, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesFilterButtons);

RecipesFilterButtons.propTypes = {
  pathname: PropTypes.string,
  categories: PropTypes.any,
  type: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  dispatchFetchRecipesCategories: PropTypes.func,
  dispatchFetchRecipes: PropTypes.func,
}.isRequired;
