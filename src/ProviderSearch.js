import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchContext from './Context';

function ProviderSearch({ children }) {
  const [data, setData] = useState({});
  const [filterIngrediente, setFilterIngrediente] = useState([]);
  const [filterRadio, setFilterRadio] = useState([]);

  useEffect(() => {

  }, []);

  function filterFood() {
    let url = '';
    if (filterRadio === 'ingrediente') {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterIngrediente}`;
    }
    if (filterRadio === 'nome') {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${filterIngrediente}`;
    }
    if (filterRadio === 'letra') {
      if (filterIngrediente.length > 1) {
        alert("Sua busca deve conter somente 1 (um) caracter");
        return;
      }
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${filterIngrediente}`;
    }
    const getFood = async () => {
      const endpoint = url;
      const { meals } = await fetch(endpoint).then((dataApi) => dataApi.json());
      setData(meals);
    };
    getFood();
  }

  function handleClickIngrediente({ target }) {
    setFilterIngrediente(target.value);
  }

  function handleClickRadio({ target }) {
    setFilterRadio(target.value);
  }

  return (
    <div>
      <SearchContext.Provider
        value={ {
          data,
          filterIngrediente,
          filterRadio,
          handleClickIngrediente,
          handleClickRadio,
          filterFood,
        } }
      >
        {children}
      </SearchContext.Provider>
    </div>
  );
}

ProviderSearch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderSearch;
