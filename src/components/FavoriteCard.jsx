// import React from 'react';
// import { Link } from 'react-router-dom';
// import ShareButton from './ShareButton';
// import FavoriteButton from './FavoriteButton';
// import DetailsProvider from '../context/detailsProvider';

// export default function FavoriteCard() {
//   if (recipe) {
//     const {
//       id, category, name, image, type: drinkOrFood,
//     } = getIds(type, recipe);
//     const path = `/${type}s/${id}`;
//     return (
//       <DetailsProvider>
//         <div>
//           <Link to={ path }>
//             <img data-testid={ `${index}-horizontal-image` } src={ image } alt={ name } />
//           </Link>
//           <h3 data-testid={ `${index}-horizontal-top-text` }>{ category }</h3>
//           <Link to={ path }>
//             <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
//           </Link>
//           <ShareButton
//             data-testid={ `${index}-horizontal-share-btn` }
//             type={ drinkOrFood }
//             id={ id }
//           />
//           <FavoriteButton recipe={ recipe } drinkOrFood={ drinkOrFood } />
//         </div>
//       </DetailsProvider>
//     );
//   }
// }
