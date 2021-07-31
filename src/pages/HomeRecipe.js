import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesMain } from '../redux/actions';
import Header from '../components/Header';

function HomeRecipe() {
  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const [isLoading, setIsLoading] = React.useState(true);
  const [meals, setMeals] = React.useState([]);

  const dispatch = useDispatch();
  const MagicMikeDance = 12;
  const fetchRecipesMainF = (url) => dispatch(fetchRecipesMain(url));

  const handlerCard = async () => {
    const response = await fetchRecipesMainF(urlFetch);

    if (response.length > 1) {
      setMeals([...response]);
      setIsLoading(false);
      // console.log(meals);
    }
  };

  React.useEffect(() => {
    handlerCard();
  }, []);

  // console.log(meals, isLoading);
  return (
    <div>
      <Header title="Comidas" />
      <div>
        {isLoading ? <p>loading...</p>
          : (meals.slice(0, MagicMikeDance).map((itemCard, index) => (

            <div key={ index } className="card">
              <img src={ itemCard.strMealThumb } alt={ itemCard.strMeal } />
              <div className="card-body">
                <p>{ itemCard.strMeal }</p>
              </div>
            </div>)))}
      </div>
    </div>
  );
}

export default connect(null, null)(HomeRecipe);
