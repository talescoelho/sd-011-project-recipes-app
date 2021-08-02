import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBarContext = createContext();

export function SearchBarProvider({ children }) {
  const [data, setData] = useState({});
  const [shouldCallCards, setShouldCallCards] = useState(false);

  const value = {
    setData,
    data,
    shouldCallCards,
    setShouldCallCards,
  };
  return (
    <SearchBarContext.Provider value={ value }>
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

// import { SearchBarProvider } from '../../context/SearchBar';

// function Foods() {
//   return (
//     <div>
//       <SearchBarProvider>
//         <SearchBar />
//       </SearchBarProvider>
//     </div>
//   );
// }

// Dentro do Componente
// const { setData } = useContext(SearchBarContext);
