import React from 'react';

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const getKey = window.localStorage.getItem(key);
    return !getKey ? initial : getKey;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
