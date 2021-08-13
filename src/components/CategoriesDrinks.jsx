import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import { APIdrinks, APIdrinksByCat } from '../services/APImealsANDdrinks';

export default function CategoriesDrinks() {
  const { setDrinksBtnCat, setDrinks } = useContext(UserContext);

  const [drinksBtn, setdrinksBtn] = useState([]);

  useEffect(() => {
    const callAPIdrinks = async () => {
      const callAPI = await APIdrinksByCat();
      setdrinksBtn(callAPI);
    };
    callAPIdrinks();
  }, []);

  const callAPIdrinks = async () => {
    const callAPI = await APIdrinks();
    const result = callAPI;
    setDrinks(result);
  };

  return (
    <div className="btn-categories">
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => callAPIdrinks() }
      >
        All
      </button>
      {drinksBtn.map((drink) => (
        <button
          key={ drink.strCategory }
          type="button"
          data-testid={ `${drink.strCategory}-category-filter` }
          onClick={ () => setDrinksBtnCat(drink.strCategory) }
        >
          {drink.strCategory}
        </button>
      ))}
    </div>
  );
}
