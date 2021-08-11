// import React, { useState, useEffect } from 'react';
// import { Layout } from '../components';
// import FavoriteButton from '../components/FavoriteButton';
// import ShareButton from '../components/ShareButton';

// function DrinkProgress() {
//   const [drinkById, setDrinkById] = useState([]);
  
//   async function fetchDrinksById() {
//     const drinkAPI = await getDrinkById(id);
//     setDrinkById(drinkAPI.drinks);
//   }

//   useEffect(() => {
//     fetchDrinksById();
//   }, []);

//   const ingredients = drinkById.filter((ingredient) => {
//     [ingredient.match('strIngredient')];
//   });

//   handleClick() {
   
//   }

//   return (
//     <Layout title="Bebidas em Progresso" search noFooter>
//       <h2 data-testid="recipe-title">
//         { drink.strDrink }
//       </h2>
//       <img
//         data-testid="recipe-photo"
//         scr={ drink.strDrinkThumb }
//         alt={ `Drink ${drink.strDrink}`}
//       /> 
//       <h3 data-testid="recipe-category">
//         { drink.strCategory}
//       </h3>
//       <ul>
//         { ingredients.map((ingredient, index) => (
//           <li key={ index } data-testid={ `${index}-ingredient-step` }>
//             <label html={ drink[ingredient] }>
//               <input
//                 type="checkbox"
//                 id={ drink[ingredient] }
//                 name={ drink[ingredient] }
//                 onClick={ hadleClick }
//               />
//               { drink[ingredient] }
//             </label>
//           </li>
//         ))}
//       </ul>
//       <p data-testid="instructions">
//         { drink.strInstructions }
//       </p>
//       <ShareButton />
//       <FavoriteButton />
//       <button data-testid="finish-recipe-btn">
//         Finalizar!
//       </button>
//     </Layout>
//   )
// }

// export default DrinkProgress;
