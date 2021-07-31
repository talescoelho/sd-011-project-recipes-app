import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipesMain } from '../redux/actions';
import Header from '../components/Header';

function HomeRecipe() {
  const dispatch = useDispatch();
  const fetchRecipesMainF = (url) => dispatch(fetchRecipesMain(url));

  const urlFetch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const handlerCard = () => {
    fetchRecipesMainF(urlFetch);
    return (
      <div> ola </div>
    );
  };

  return (
    <div>
      <Header title="Comidas" />
      { handlerCard() }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (url) => dispatch(fetchRecipesMain(url)),
});

export default connect(null, mapDispatchToProps)(HomeRecipe);
