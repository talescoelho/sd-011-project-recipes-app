import React, { useState } from 'react';
import Header from '../components/Header';

export default function RecipeFavorite() {
  const [type, setType] = useState('');

  const setTypeFavorite = ({ target }) => {
    const { value } = target;
    setType(value);
  };

  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(Local);
    if (Local) {
      return Local.map((item, index) => (<div key={ index }>
        <span data-testid="${index}-horizontal-top-text"> </span>
       <h2> {item.name}</h2>
                                         </div>));
    }
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button type="button" data-testid="filter-by-all-btn" value="" onClick={ setTypeFavorite }>All</button>
      <button type="button" data-testid="filter-by-food-btn" value="Food" onClick={ setTypeFavorite }>Food</button>
      <button type="button" data-testid="filter-by-drink-btn" value="Drinks" onClick={ setTypeFavorite }>Drinks</button>
      <div>
        { getFavoriteLocalStorage() }
      </div>
    </div>
  );
}
