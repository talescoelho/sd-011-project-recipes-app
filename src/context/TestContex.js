import React, { createContext } from 'react';

export const TestContext = createContext();

export function Test({ children }) {
  const [state, setState] = useState();
  const value = {
    state,
  };
  return (
    <TestContext.Provider value={ value }>
      { children }
    </TestContext.Provider>
  );
}

// Pagina que vai receber o provider

import React from 'react';
import { TestContext } from '../context/TestContex';
import FavoriteRecipes from './FavoriteRecipes';

export default function Login() {
  return (
    <TestContext.Provider>
      <FavoriteRecipes />
    </TestContext.Provider>
  );
}

// Pagina que vai usar o context
// import React from 'react';
// import { TestContext } from '../context/TestContex';

const { state } = useContext(TestContext);


