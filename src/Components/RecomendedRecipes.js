// import React, { useEffect, useState } from 'react';
// import CardRecipes from '../Components/CardRecipes';
// import { Link, useHistory } from 'react-router-dom';
// import useSearchbar from '../Context/useSearchbar';

// export default function RecomendedRecipes(props) {
// const [recipes, setRecipes] = useState([]);
// const { getRecipes } = useSearchbar();
//   useEffect(() => {
//       const getApi = async (site) => {
//       const endPoint = `https://www.the${site}db.com/api/json/v1/1/search.php?s=`;
//       const response = await fetch(endPoint);
//       const results = await response.json();
//       const { recp } = results;
//       setRecipes(recp);
//       console.log(recp);
//     };
//     getApi();
//     }, []);
//     const renderCardRecipes = () => {
//     const showMaxRecipes = 6;
//     if (recipes) {
//       const filteredRecipe = recipes.filter(
//         (meals, index) => index < showMaxRecipes,
//       );
//       return filteredRecipe;
//     }
//     };

//   return(
//   <div className="recomended">
//     {renderCardRecipes().map((recp, index) => (
//       <Link
//         className="link"

//         key={ index }
//         to="/details-recipe"
//       >
//         <CardRecipes
//           key={ index }
//           index={ index }

//           thumb={ recp.strMealThumb }
//           title={ recp.strMeal }
//         />
//       </Link>))}
//   </div>

//   )
// }
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { getDrink, getFood } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';
import CardRecipes from './CardRecipes';
import './Recomended.css';

function RecomendedRecipes({ origem }) {
  const { cards, setCards } = useContext(MyContext);

  const busca = async () => {
    if (origem === 'http://localhost:3000/details-recipe') {
      const resposta = await getDrink();
      setCards(resposta.drinks);
    } else {
      const resposta = await getFood();
      setCards(resposta.meals);
    }
  };

  useEffect(() => {
    busca();
  }, []);

  const renderCardRecipes = () => {
    const showMaxRecipes = 6;
    if (cards) {
      const filteredRecipe = cards.filter(
        (item, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  if (origem === 'http://localhost:3000/details-recipe') {
    return (
      <div className="slider">
        {cards.length > 0 && renderCardRecipes().map((recp, index) => (
          <Link
            className="recomendation-card"
            key={ index }
            to="/bebidas/drink-details"
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strDrinkThumb }
              title={ recp.strDrink }
            />
          </Link>
        ))}
      </div>);
  }
  return (
    <div className="cardlist">
      {cards.length > 0 && renderCardRecipes().map((recp, index) => (
        <Link
          className="recomendation-card"
          key={ index }
          to="/bebidas/details-recipe"
        >
          <CardRecipes
            key={ index }
            index={ index }
            thumb={ recp.strMealThumb }
            title={ recp.strMeal }
          />
        </Link>
      ))}
    </div>);
}

export default RecomendedRecipes;

RecomendedRecipes.propTypes = {
  origem: string,
}.isRequired;
