import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import '../css/comidas.css';

const Comidas = () => {
  const [foods, setFoods] = useState({});
  const [categories, setCategories] = useState({});
  const mealsLength = 12;
  const categoriesLength = 5;

  const fetchComidas = (endPoint, setState) => {
    fetch(endPoint)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    fetchComidas('https://www.themealdb.com/api/json/v1/1/search.php?s=', setFoods);
    fetchComidas('https://www.themealdb.com/api/json/v1/1/list.php?c=list', setCategories);
  }, []);

  if (!foods.meals || !categories.meals) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {
        categories.meals.filter((_, index) => index < categoriesLength)
          .map((category, index) => (
            <label key={ index } htmlFor={ category.strCategory }>
              { category.strCategory }
              <input
                data-testid={ `${category.strCategory}-category-filter` }
                id={ category.strCategory }
                type="radio"
                name="category"
                value={ category.strCategory }
                onChange={ () => fetchComidas(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`, setFoods) }
              />
            </label>
          ))
      }
      <div className="foods-cards">
        { foods.meals.filter((_, index) => index < mealsLength)
          .map((meal, index) => (
            <Cards
              name={ meal.strMeal }
              thumb={ meal.strMealThumb }
              index={ index }
              key={ index }
            />))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   meals: state.comidas.meals,
// });

// const mapDispatchToProps = (dispatch) => ({
// });

export default connect()(Comidas);
