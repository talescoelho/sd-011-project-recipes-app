// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import './RecipesFoods.css';
// import CardRecipes from '../Components/CardRecipes';
// import MyContext from '../Context/MyContext';
// import CategoryButtons from '../Components/CategoryButtons';
// import useExploreRecipes from '../Context/useExploreRecipes';

// export default function ExploreFoodOrigin() {
//   const { foodArea, setFoodArea } = useContext(MyContext);
//   const showMaxRecipes = 12;

//   useEffect(() => {
//     const getFoodArea = async () => {
//       const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
//       const { result } = await fetch(endpoint).then((data) => data.json());
//       setFoodArea(result);
//     };
//     getFoodArea();
//     console.log(foodArea);
//   }, []);

//   const { backToExplore } = useExploreRecipes('comidas');

//   return (
//     <div>
//       <Header className="title" title="Bebidas" searchIconAppears />
//       <CategoryButtons />
//       <div className="cardlist">
//         {foodArea.length > 0 && foodArea.map((recp, index) => (
//           index < showMaxRecipes
//           && (
//             <Link
//               className="link"
//               key={ recp.idMeal }
//               data-testid={ `${index}-ingredient-card` }
//               to={ {
//                 backToExplore();
//               } }
//             >
//               <CardRecipes
//                 key={ index }
//                 index={ index }
//                 thumb={ recp.strMealThumb }
//                 title={ recp.strMeal }
//               />
//             </Link>
//           )
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }
