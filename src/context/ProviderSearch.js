import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import SearchContext from './Context';
import getFood from '../services/SearchRecipe';

function ProviderSearch({ children }) {
  const [data, setData] = useState({});
  const [search, setSearch] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const initialState = {
    data: '',
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH':
        return {
          ...state,
          data: action.payload,
        };

      case 'FILTER':
        return {
          ...state,
          filteredData: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(initialState, reducer);

  const getForm = (form) => {};

  const returned = { state, filteredData };

  return (
    <SearchContext.Provider value={returned}>{children}</SearchContext.Provider>
  );
}

ProviderSearch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderSearch;
