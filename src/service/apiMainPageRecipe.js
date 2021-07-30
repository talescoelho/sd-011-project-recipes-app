// import { requestCategories, requestSuccessCategories } from '../actions';

// export default async function categoriesFetch(mealOrDrink) {
//   let response;
//   if (mealOrDrink === 'meal') {
//     response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
//   }

//   if (mealOrDrink === 'drink') {
//     response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
//   }
//   // console.log(response);
//   return async (dispatch) => {
//     try {
//       dispatch(requestCategories());
//       const data = await response.json();
//       // console.log(data);
//       dispatch(requestSuccessCategories(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
