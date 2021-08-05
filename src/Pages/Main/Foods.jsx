import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import HeaderFoods from '../../Components/headers/HeaderFoods';
import LowerMenu from '../../Components/footer/LowerMenu';

function Foods() {
  const { dataFoods, setPage, limit,
    setIdFoods/* , setDetailsFoods */ } = useContext(MainContext);

  function thisPage() {
    setPage('foods');
  }

  useEffect(() => {
    thisPage();
  }, []);

  if (dataFoods.length === 1) {
    // * ===== Prototipo forma de capturar o id da comida selecionada ==
    const ReceivedIdMeal = dataFoods[0].idMeal;
    setIdFoods(ReceivedIdMeal);
    const details = JSON.stringify(dataFoods[0]);
    window.localStorage.setItem('DetailsFoods', details);
    // * ================================================================
    return <Redirect to={ `/comidas/${dataFoods[0].idMeal}` } />;
  }

  return (
    <div>
      <HeaderFoods />
      { dataFoods.map((item, index) => index < limit && (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ item.strMealThumb }
            alt={ `Food ${item.strMeal}` }
            width="200"
          />
          <p data-testid={ `${index}-card-name` }>
            { item.strMeal }
          </p>
        </div>
      )) }
      <LowerMenu />
    </div>
  );
}

export default Foods;
