import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestByMeal, { requestArea } from '../Services/Data';
import Footer from '../components/Footer';
import Header from '../components/Header';
import searchIcon from '../images/searchIcon.svg';

function ExploreMealsByArea() {
  const [listOfAreas, setListOfAreas] = React.useState('');
  const [listOfMeals, setListOfMeals] = React.useState([]);
  const [listOfFilteredMeals, setListOfFilteredMeals] = React.useState(listOfMeals);

  useEffect(() => {
    (async function resolve() {
      const areaList = await requestArea();
      const mealList = await requestByMeal();
      setListOfAreas(areaList.meals);
      setListOfMeals(mealList.meals);
      setListOfFilteredMeals(mealList.meals);
    }());
  }, []);

  async function filterMealsByArea({ target }) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`);
    const newMeals = await response.json();
    if (target.value === 'All') {
      setListOfFilteredMeals(listOfMeals);
    } else {
      setListOfFilteredMeals(newMeals.meals);
    }
  }

  const numberOfMealCards = 12;

  return (
    <div>
      <Header title="Explorar Origem" />
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="imagem lupa"
      />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => filterMealsByArea(e) }
      >
        <option data-testid="All-option" selected>All</option>
        {Array.from(listOfAreas)
          .map(({ strArea }) => (
            <option
              key={ strArea }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}
            </option>
          ))}
      </select>
      <section>
        {listOfFilteredMeals.slice(0, numberOfMealCards)
          .map(({ idMeal, strMealThumb, strMeal }, index) => (
            <div key={ strMeal } data-testid={ `${index}-recipe-card` }>
              <Link to={ `/comidas/${idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strMealThumb }
                  alt="imagem da comida"
                />
                <h4 data-testid={ `${index}-card-name` }>{strMeal}</h4>
              </Link>
            </div>
          ))}
      </section>
      <Footer />
    </div>
  );
}

export default ExploreMealsByArea;
