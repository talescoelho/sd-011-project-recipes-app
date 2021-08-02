import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../context/MainContext';
import RecipeCard from './RecipeCard';

function RecipesCardsContainer() {
  const [showCards, setShowCards] = useState(false);
  const { data, loading } = useContext(MainContext);
  const maxCardLength = 11;

  useEffect(() => {
    if (!loading) {
      if (data.length === 0) {
      // eslint-disable-next-line no-alert
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else {
        setShowCards(true);
      }
    }
  }, [data, loading]);

  console.log(data);

  return (
    <section>
      { showCards ? data.map((recipe, index) => (
        index > maxCardLength ? null : <RecipeCard index={ index } recipe={ recipe } />
      )) : null }
    </section>
  );
}

export default RecipesCardsContainer;
