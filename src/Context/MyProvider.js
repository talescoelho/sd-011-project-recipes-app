import { Children } from 'react';
import MyContext from './MyContext';

function MyProvider({ Children }) {
  
  return(
    <MyContext.Provider value={}>
      { Children }
    </MyContext.Provider>
  )
}