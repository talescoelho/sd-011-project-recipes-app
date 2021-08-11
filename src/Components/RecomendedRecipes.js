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
