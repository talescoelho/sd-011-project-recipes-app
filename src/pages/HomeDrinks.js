import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchDrinkMain } from '../redux/actions';
import Header from '../components/Header';

function HomeDrinks() {
  const urlFetch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const [isLoading, setIsLoading] = React.useState(true);
  const [drinks, setDrinks] = React.useState([]);

  const dispatch = useDispatch();
  const MagicMikeDance = 12;
  const fetchRecipesMainF = (url) => dispatch(fetchDrinkMain(url));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);
    if (response.length > 1) {
      setDrinks([...response]);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    handlerCard();
  }, []);

  // console.log(meals, isLoading);
  return (
    <div>
      <Header title="Bebidas" />
      <div>
        {isLoading ? <p>loading...</p>
          : (drinks.slice(0, MagicMikeDance).map((itemCard, index) => (

            <div key={ index } data-testid={ `${index}-recipe-card` } className="card">
              <img
                src={ itemCard.strDrinkThumb }
                data-testid={ `${index}-card-img` }
                alt={ itemCard.strDrink }
              />
              <div className="card-body">
                <p data-testid={ `${index}-card-name` }>{ itemCard.strDrink }</p>
              </div>
            </div>)))}
      </div>
    </div>
  );
}

export default connect(null, null)(HomeDrinks);
