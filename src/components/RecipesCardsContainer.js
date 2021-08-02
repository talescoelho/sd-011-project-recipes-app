import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../context/MainContext';

function RecipesCardsContainer() {
  const [showCards, setShowCards] = useState(false);
  const { data } = useContext(MainContext);
  const maxCardLength = 11;

  useEffect(() => {
    if (!data) {
    // eslint-disable-next-line no-alert
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else {
      setShowCards(true);
    }
  }, [data]);

  return (
    <section>
      { showCards ? data.map((recipe, index) => (
        index > maxCardLength ? null : <div />
      )) : null }
    </section>
  );
}

export default RecipesCardsContainer;
