// import React, { useEffect } from 'react';
// import { fetchCategoryList } from '../Services/FetchApi';
// import mealOrDrink from '../Services/MealOrDrink';

// const maxList = 4;

// export default function useCategoryRecipe(type) {
//   const { foods, site } = mealOrDrink;

//   useEffect(() => {
//     const fetchCategoryList = async () => {
//       const responseCategory = await fetchCategoryList(site);

//       const filteredCategory = responseCategory[foods].reduce(acc, cur, index) => {
//         if (index > maxList) return acc;
//         const category = cur.strCategory;
//         const categoryList = acc.concat(category);
//         return categoryList;
//       }, []);

//       })
//     }
//   })
// }
