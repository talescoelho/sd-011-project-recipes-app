import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AreaSelect from '../components/AreaSelect';
// import RecipeCards from '../components/RecipeCards';
// import AreaSelect from '../components/AreaSelect';

function ComidasArea() {
  return (
    <div>
      <Header
        mealOrDrink="meal"
        buttonExists
        title="Explorar Origem"
        searchOrSelect="select"
      />
      <AreaSelect />
      <Footer />
    </div>
  );
}

export default ComidasArea;
