import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoodAction } from '../redux/actions';

function FoodCard(props) {
  const { resultFood } = props;
  const totalRecipes = 12;
  const food = resultFood.filter((_, index) => index < totalRecipes);

  React.useEffect(() => {
    if (!resultFood.length) {
      const { requestFood } = props;
      requestFood();
    }
  }, []);

  return (
    <div>
      {food.map((recipe, index) => (
        <div key={ recipe.idMeal } className="card">
          <Link to={ `/comidas/${recipe.idMeal}` }>
            <div key={ recipe.idMeal } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                width="60px"
              />
              <h4 data-testid={ `${index}-card-name` }>{ recipe.strMeal }</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  resultFood: state.food.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  requestFood: () => dispatch(fetchFoodAction()),
});

FoodCard.propTypes = {
  resultFood: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FoodCard);
