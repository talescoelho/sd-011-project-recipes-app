import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import { fetchSearchIngredients } from '../redux/actions/searchBarActions';

const FoodIngredients = () => {
  document.title = 'Explorar Ingredientes';
  const { data, request } = useFetch();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    request('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  }, [request]);

  if (!data) {
    return null;
  }

  console.log(pathname);
  const magicNumber = 12;
  const filteredData = data.meals.filter((item, index) => index < magicNumber);

  return (
    <div>
      <Header />
      { filteredData.map((item, index) => {
        const { strIngredient } = item;
        return (
          <Link
            key={ index }
            to="/comidas"
            onClick={ () => dispatch(fetchSearchIngredients(strIngredient, pathname)) }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <div data-testid={ `${index}-ingredient-card` }>
                <img
                  src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png ` }
                  alt={ strIngredient }
                  data-testid={ `${index}-card-img` }
                />
                <h3 data-testid={ `${index}-card-name` }>{strIngredient}</h3>
              </div>
            </div>
          </Link>
        );
      }) }
      <FooterMenu />
    </div>
  );
};

export default FoodIngredients;
