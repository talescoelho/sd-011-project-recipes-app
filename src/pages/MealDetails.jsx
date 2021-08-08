import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
import { APImealById } from '../services/APImealsANDdrinks';

// Falta implementar o await da promise;
// corrigir rota e colocar o barra que está faltando. Ver se é encessario
// Adicionar loading

// {
//   /*
//   {
//       drinks.map((drink, index) => (
//         (index < MAGIC6) ? (
//           <RecipeCard
//             key={ index }
//             title={ drink.strDrink }
//             img={ drink.strDrinkThumb }
//             category={ drink.strAlcoholic }
//             id={ drink.idDrink }
//             index={ index }
//           />
//         ) : null))
//   } */
// }

// {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
//     <li data-target="#carouselExampleIndicators" data-slide-to="1" />
//     <li data-target="#carouselExampleIndicators" data-slide-to="2" />
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src={ drinks[0].strDrinkThumb } alt="Primeiro Slide" />
//     </div>

//     <div className="carousel-item">
//       <img className="d-block w-100" src={ drinks[1].strDrinkThumb } alt="Segundo Slide" />
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src={ drinks[2].strDrinkThumb } alt="Terceiro Slide" />
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true" />
//     <span className="sr-only">Anterior</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true" />
//     <span className="sr-only">Próximo</span>
//   </a>
// </div> */}
// <button type="button" data-testid="start-recipe-btn">
//   Iniciar Receita
//   {/* no click desse botão muda a url e envia apra o receitas em prograsso que ira usar o card da receita e no lugar de ingredientes irá colocar os checkbox. */}
// </button>
function MealDetails({ match: { params } }) {
  const MAGIC6 = 6;
  const { drinks } = useContext(UserContext);
  const [MealDataAPI, setMealDadaAPI] = useState({});
  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setMealDadaAPI(response.meals[0]);
    };
    requestMeal();
  }, []);

  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
      />

      <IngredientsList meal={ MealDataAPI } />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {MealDataAPI.strInstructions}
      </p>

      {(MealDataAPI.strYoutube) ? (
        <div className="embed-responsive embed-responsive-16by9">
          <h2>Video</h2>
          <iframe
            src={ MealDataAPI.strYoutube.replace('watch?v=', 'embed/') }
            data-testid="video"
            title="recipe Video"
            className="embed-responsive-item"
            allowFullScreen
          />
        </div>
      ) : <h2>Loading</h2>}

      <h2>Recomendadas</h2>
      <div id="drink" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {
            drinks.map((drink, index) => (
              (index < MAGIC6) ? (
                <input
                  type="button"
                  data-bs-target="drink"
                  data-bs-slide-to={ index }
                  className={ (index === 0) ? 'active' : null }
                  aria-label={ `Slide ${index}` }
                  aria-current={ (index === 0) ? true : null }
                />
              ) : null))
          }
        </div>
        <div className="carousel-inner">
          {
            drinks.map((drink, index) => (
              (index < MAGIC6) ? (
                <div
                  className={ (index === 0) ? 'carousel-item active' : 'carousel-item' }
                >
                  <img
                    src={ drink.strDrinkThumb }
                    className="d-block w-100"
                    alt=" foto drink"
                  />
                </div>
              ) : null))
          }
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#drink"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#drink"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;

// corrigir proptypes
MealDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  // params: PropTypes.objectOf(PropTypes.object).isRequired,
  // id: PropTypes.string.isRequired,
};
