import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreByLocal() {
  const [country, setCountry] = React.useState([]);

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

  React.useEffect(() => {
    getCountryList();
  }, []);
  const handlerCountries = () => {
    const magicNumberFive = 12;
    return (
      <div>
        <label htmlFor="country">
          <select className="country" data-testid="explore-by-area-dropdown">
            {country.length
        && country.slice(0, magicNumberFive).map(({ strArea }, index) => (
          <option data-testid={ `${strArea}-option` } key={ index }>{strArea}</option>))}
          </select>
        </label>
      </div>
    );
  };
  return (
    <div>
      <Header title="Explorar Origem" />
      {handlerCountries()}
      <Footer />
    </div>
  );
}
