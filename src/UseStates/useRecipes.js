import { useContext } from 'react';
import MyProvider from '../Context/MyProvider';

export default function useRecipes() {
  const value = useContext(MyProvider);
  return value;
}
