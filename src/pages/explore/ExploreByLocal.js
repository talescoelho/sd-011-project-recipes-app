import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreByLocal() {
  const numberSlice = 12;
  const [country, setCountry] = React.useState([]);
  const [countryList, setCountryList] = React.useState('American');
  const [recipes, setRecipes] = React.useState([]);

  const urlCountryList = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const getCountryList = async () => {
    try {
      const response = await fetch(urlCountryList);
      const data = await response.json();
      setCountry([...data.meals]);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountry = ({ target }) => {
    const { value } = target;
    setCountryList(value);
  };

  const getFood = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryList}`);
      const data = await response.json();
      setRecipes([...data.meals]);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerFood = () => (
    <div>
      {recipes.length && recipes.slice(0, numberSlice).map((item, index) => (
        <Link key={ index } to={ `/comidas/${item.idMeal}` }>
          <div data-testid={ `${index}-recipe-card` }>
            <h2 data-testid={ `${index}-card-name` }>{item.strMeal}</h2>
            <img
              style={ { width: ' 30%', height: '50%' } }
              src={ item.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt={ item.strMeal }
            />
          </div>
        </Link>
      ))}
    </div>
  );

  React.useEffect(() => {
    getFood();
  }, [countryList]);

  React.useEffect(() => {
    getCountryList();
  }, []);

  const handlerCountries = () => (
    <div>
      <label htmlFor="country">
        <select
          onClick={ getCountry }
          className="country"
          data-testid="explore-by-area-dropdown"
        >
          {country.length
      && country.map(({ strArea }, index) => (
        <option
          data-testid={ `${strArea}-option` }
          value={ strArea }
          key={ index }
        >
          {strArea}
        </option>))}
        </select>
      </label>
    </div>
  );

  return (
    <div>
      <Header title="Explorar Origem" />
      {handlerCountries()}
      {handlerFood()}
      <Footer />
    </div>
  );
}
