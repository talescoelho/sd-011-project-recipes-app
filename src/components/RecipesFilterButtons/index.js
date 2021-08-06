import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipesCategories } from '../../actions';
import getXFirstElementsFromArray from '../../helpers/utils';

const filtersQuantity = 5;

const RecipesFilterButtons = ({
  pathname, categories, type, dispatchFetchRecipesCategories,
}) => {
  React.useEffect(() => {
    if (!pathname.includes(type)) {
      dispatchFetchRecipesCategories(pathname.replace('/', ''));
    }
  }, [pathname, type, dispatchFetchRecipesCategories]);

  return (
    <section>
      {
        getXFirstElementsFromArray(categories, filtersQuantity)
          .map((category) => (
            <button
              type="button"
              key={ category }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesFilterButtons);

RecipesFilterButtons.propTypes = {
  pathname: PropTypes.string,
  categories: PropTypes.any,
  type: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  dispatchFetchRecipesCategories: PropTypes.func,
}.isRequired;
