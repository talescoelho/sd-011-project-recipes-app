import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBarContext = createContext();

export function Provider({ children }) {
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

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

// import { Provider } from '../../context/SearchBar';

// function Foods() {
//   return (
//     <div>
//       <Provider>
//         <SearchBar />
//       </Provider>
//     </div>
//   );
// }

// Dentro do Componente
// const { setData } = useContext(SearchBarContext);
