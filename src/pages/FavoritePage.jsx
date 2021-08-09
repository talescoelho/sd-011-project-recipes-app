import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';
import '../styles/doneRecipes.css';
import useLSHook from '../components/Hooks/useLSHook';
import { getFavoriteRecipes, filterBookmarked } from '../Redux/actions/index';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const [favoriteRecipes, setFavoriteRecipes] = useLSHook();
  const recipes = useSelector((state) => state.user.favoriteRecipes);

  useEffect(() => {
    if (favoriteRecipes.length) {
      dispatch(getFavoriteRecipes(favoriteRecipes));
    }
  }, [dispatch, favoriteRecipes]);

  const filterRecipes = (foodEl) => {
    if (foodEl) {
      const filteredRecipes = favoriteRecipes.filter((food) => food.type === foodEl);
      return dispatch(filterBookmarked(filteredRecipes));
    }
    return dispatch(filterBookmarked(favoriteRecipes));
  };

  const cardsToRender = (cardsRender) => (
    cardsRender && cardsRender.map((el, index) => (
      (
        <FavoriteCard key={ index } { ...{ el, index } } />
      ))));

  return (
    <>
      <Header pageName="Receitas Favoritas" />
      <main>
        <Form className="d-flex justify-content-evenly mt-4 mb-3">
          <Button
            data-testid="filter-by-all-btn"
            onClick={ () => filterRecipes() }
          >
            All

          </Button>
          <Button
            data-testid="filter-by-food-btn"
            onClick={ () => filterRecipes('comida') }
          >
            Food

          </Button>
          <Button
            data-testid="filter-by-drink-btn"
            onClick={ () => filterRecipes('bebida') }
          >
            Drinks

          </Button>
        </Form>
        <div className="done-recipe">{cardsToRender(recipes)}</div>
      </main>
    </>
  );
}
