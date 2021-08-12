import React, { useEffect } from 'react';
import requestByMeal, { requestArea } from '../Services/Data';
import Footer from '../components/Footer';
import Header from '../components/Header';
import searchIcon from '../images/searchIcon.svg';

function ExploreMealsByArea() {
  const [listOfAreas, setListOfAreas] = React.useState('');
  const [listOfMeals, setListOfMeals] = React.useState([]);

  useEffect(() => {
    (async function resolve() {
      const areaList = await requestArea();
      const mealList = await requestByMeal();
      setListOfAreas(areaList.meals);
      setListOfMeals(mealList.meals);
    }());
  }, []);

  const numberOfMealCards = 12;

  return (
    <div>
      <Header title="Explorar Origem" />
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="imagem lupa"
      />
      <select data-testid="explore-by-area-dropdown">
        {Array.from(listOfAreas)
          .map(({ strArea }) => (
            <option key={ strArea } data-testid={ `${strArea}-option` }>{strArea}</option>
          ))}
      </select>
      <section>
        {Array.from(listOfMeals).slice(0, numberOfMealCards)
          .map(({ strMealThumb, strMeal }, index) => (
            <div key={ strMeal } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt="imagem da comida"
              />
              <h4 data-testid={ `${index}-card-name` }>{strMeal}</h4>
            </div>
          ))}
      </section>
      <Footer />
    </div>
  );
}

export default ExploreMealsByArea;
