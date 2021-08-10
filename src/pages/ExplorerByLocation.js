import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

export default function ExplorerByLocation(props) {
  const [countries, setCountries] = useState([]);
  const { getFoodByLocation, getAllFoods, getFoodByCountry } = useContext(MyContext);
  const [data, setData] = useState([]);
  const { history } = props;
  const { location } = history;
  const { pathname } = location;

  useEffect(() => {
    const getCountries = async () => {
      setCountries(await getFoodByLocation());
      setData(await getAllFoods());
    };
    getCountries();
  }, [getFoodByLocation, getAllFoods]);
  console.log(countries);

  async function handleClickOption({ target }) {
    const { value } = target;
    if (value === 'all') {
      setData(await getAllFoods());
    } else {
      setData(await getFoodByCountry(value));
    }
  }

  const maxArrayProducts = 12;
  console.log(pathname);
  if (pathname === '/explorar/bebidas/area') {
    return (
      <div>
        <Header title="Explorar Origem" disable={ false } />
        <h1>Not Found</h1>
        <Footer />
      </div>
    );
  }

  return (
    <main>
      <Header title="Explorar Origem" disable={ false } />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => handleClickOption(e) }
      >
        <option data-testid="All-option" value="all">All</option>
        {countries.length !== 0 && countries.map((country, index) => (
          <option
            data-testid={ `${country.strArea}-option` }
            key={ index }
            value={ country.strArea }
          >
            {country.strArea}
          </option>))}
      </select>
      {data.length !== 0 && data
        .slice(0, maxArrayProducts)
        .map((element, index) => (
          <Link key={ index } to={ `/comidas/${element.idMeal}` }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ element.strMealThumb }
                alt="comida_principal"
                data-testid={ `${index}-card-img` }
                width="50px"
              />
              <p data-testid={ `${index}-card-name` }>{element.strMeal}</p>
            </div>
          </Link>
        ))}
      <Footer />
    </main>
  );
}

ExplorerByLocation.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};
