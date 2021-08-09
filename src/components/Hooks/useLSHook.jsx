import { createLocalStorageStateHook } from 'use-local-storage-state';

export default function useLSHook() {
  const useStore = createLocalStorageStateHook('favoriteRecipes', []);
  return useStore();
}
