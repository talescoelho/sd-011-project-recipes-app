import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';

const ExploreFoodByArea = () => {
  document.title = 'Explorar Origem';
  const { data: filters, request: requestFilters } = useFetch();
  const { data, request: requestData } = useFetch();
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    requestFilters('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }, [requestFilters]);

  React.useEffect(() => {
    if (filter === 'all') {
      requestData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      requestData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`);
    }
  }, [filter, requestData]);

  if (!filters || !data) return null;
  const maxNumberOfCard = 12;

  return (
    <div>
      <Header />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => setFilter(e.target.value) }
      >
        <option data-testid="All-option" value="all">All</option>
        {filters.meals.map((value, index) => (
          <option
            data-testid={ `${value.strArea}-option` }
            value={ value.strArea }
            key={ index }
          >
            {value.strArea}
          </option>))}
      </select>
      {data.meals.filter((value, index) => index < maxNumberOfCard)
        .map((value, index) => {
          const { strMeal, strMealThumb, idMeal } = value;
          return (
            <Link to={ `/comidas/${idMeal}` } key={ index }>
              <div data-testid={ `${index}-recipe-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strMealThumb }
                  alt={ strMeal }
                />
                <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
              </div>
            </Link>
          );
        })}
      <FooterMenu />
    </div>
  );
};

export default ExploreFoodByArea;
