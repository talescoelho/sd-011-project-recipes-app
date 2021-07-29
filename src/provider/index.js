import React from 'react';

import GlobalContext from '../context';

export default function Provider({ children }) {
  return (
    <GlobalContext.Provider>
      { children }
    </GlobalContext.Provider>
  );
}
