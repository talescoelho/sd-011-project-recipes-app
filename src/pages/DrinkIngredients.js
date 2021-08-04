import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import { fetchSearchIngredients } from '../redux/actions/searchBarActions';

const DrinkIngredients = () => {
  document.title = 'Explorar Ingredientes';
  const { data, request } = useFetch();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    request('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  }, [request]);

  if (!data) {
    return null;
  }

  const magicNumber = 12;
  const filteredData = data.drinks.filter((item, index) => index < magicNumber);

  return (
    <div>
      <Header />
      { filteredData.map((item, index) => {
        const { strIngredient1 } = item;
        return (
          <Link
            key={ index }
            to="/bebidas"
            onClick={ () => dispatch(fetchSearchIngredients(strIngredient1, pathname)) }
          >
            <div data-testid={ `${index}-recipe-card` }>
              <div data-testid={ `${index}-ingredient-card` }>
                <img
                  src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png ` }
                  alt={ strIngredient1 }
                  data-testid={ `${index}-card-img` }
                />
                <h3 data-testid={ `${index}-card-name` }>{strIngredient1}</h3>
              </div>
            </div>
          </Link>
        );
      }) }
      <FooterMenu />
    </div>
  );
};

export default DrinkIngredients;
