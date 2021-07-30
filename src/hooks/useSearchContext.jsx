import { useContext } from 'react';
import SearchContext from '../context/Context';

const useSearchContext = () => {
  const state = useContext(SearchContext);
  return state;
};

export default useSearchContext;
