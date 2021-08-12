import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import {
  APImealsSearch1stLetter,
  APImealsSearchIgredient,
  APImealsSearchName } from '../services/APImealsANDdrinks';

export default function SearchBarMeals() {
  const { setMeals, meals, showSearch } = useContext(UserContext);

  const [type, setType] = useState('');
  const [radio, setRadio] = useState('');

  const handleChangeType = (e) => {
    setType(e);
  };

  const handleChangeRadios = (e) => {
    setRadio(e);
  };

  const hangleSearch = () => {
    if (radio === 'Ingrediente') {
      const callAPI = async () => {
        const API = await APImealsSearchIgredient(type, meals);
        setMeals(API);
      };
      callAPI();
    }
    if (radio === 'Nome') {
      const callAPI = async () => {
        const API = await APImealsSearchName(type, meals);
        setMeals(API);
      };
      callAPI();
    }
    if (radio === 'Primeira-letra') {
      const callAPI = async () => {
        const API = await APImealsSearch1stLetter(type, meals);
        setMeals(API);
      };
      callAPI();
    }
    if (radio === 'Primeira-letra' && type.length > 1) {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  if (!showSearch) {
    return null;
  }

  return (
    <div className="alltoggle-search">
      <div className="toggle-search">
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => handleChangeType(e.target.value) }
        />
        <div className="input-radios">
          <label htmlFor="input-igrediente">
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="filtro"
              id="Ingrediente"
              onChange={ (e) => handleChangeRadios(e.target.id) }
            />
            Ingrediente
          </label>
          <label htmlFor="input-nome">
            <input
              type="radio"
              data-testid="name-search-radio"
              name="filtro"
              id="Nome"
              onChange={ (e) => handleChangeRadios(e.target.id) }
            />
            Nome
          </label>
          <label htmlFor="input-primeira-letra">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="filtro"
              id="Primeira-letra"
              onChange={ (e) => handleChangeRadios(e.target.id) }
            />
            Primeira letra
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          className="btn-search"
          onClick={ () => hangleSearch() }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
