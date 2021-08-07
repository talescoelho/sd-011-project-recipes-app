import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import { APIdrinksByCat } from '../services/APImealsANDdrinks';

export default function CategoriesDrinks() {
  const { setDrinksBtnCat, setBtnAll } = useContext(UserContext);

  const [drinksBtn, setdrinksBtn] = useState([]);

  useEffect(() => {
    const callAPIdrinks = async () => {
      const callAPI = await APIdrinksByCat();
      setdrinksBtn(callAPI);
    };
    callAPIdrinks();
  }, []);

  let clicks = 1;

  const clickBtnAll = () => {
    clicks += 1;
    console.log(clicks);
    return clicks;
  };

  return (
    <div className="btn-categories">
      <button
        type="button"
        data-testid="all-category-filter"
        onClick={ () => setBtnAll(clickBtnAll()) }
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
