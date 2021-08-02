import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import '../css/comidas.css';

const Comidas = () => {
  const [drinks, setDrinks] = useState({});
  const [categories, setCategories] = useState({});
  const [toggle, setToggle] = useState({});
  const drinksLength = 12;
  const categoriesLength = 5;

  const fetchComidas = (endPoint, setState) => {
    fetch(endPoint)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    fetchComidas('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', setDrinks);
    fetchComidas('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', setCategories);
  }, []);

  if (!drinks.drinks || !categories.drinks) {
    return <div>Carregando...</div>;
  }

  function handleChange(strCategory) {
    if (!toggle[strCategory]) {
      setToggle({ [strCategory]: false });
      fetchComidas(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`, setDrinks);
    } else {
      fetchComidas('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', setDrinks);
    }
  }

  return (
    <div>
      {
        categories.drinks.filter((_, index) => index < categoriesLength)
          .map((category, index) => (
            <button
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
              id={ category.strCategory }
              type="button"
              name="category"
              value={ category.strCategory }
              onClick={ () => handleChange(category.strCategory) }
            >
              { category.strCategory }
            </button>
          ))
      }
      <div className="foods-cards">
        { drinks.drinks.filter((_, index) => index < drinksLength)
          .map((meal, index) => (
            <Cards
              name={ meal.strDrink }
              thumb={ meal.strDrinkThumb }
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
