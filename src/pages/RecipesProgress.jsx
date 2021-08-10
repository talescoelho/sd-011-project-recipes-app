import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipeMealProgress from '../components/RecipeMealProgress';

export default function RecipesProgress() {
  const location = useLocation().pathname;
  console.log(location.split('/')[1]);

  function renderRecipeProgressItem() {
    if (location.split('/')[1] === 'comidas') {
      return <RecipeMealProgress />;
    }
  }

  return (
    <div>
      { renderRecipeProgressItem() }
    </div>
  );
}
