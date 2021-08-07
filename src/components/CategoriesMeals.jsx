import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import { APImealsByCat } from '../services/APImealsANDdrinks';

export default function CategoriesMeals() {
  const { setMealsBtnCat, setBtnAll } = useContext(UserContext);

  const [mealsBtn, setMealsBtn] = useState([]);

  useEffect(() => {
    const callAPImeals = async () => {
      const callAPI = await APImealsByCat();
      setMealsBtn(callAPI);
    };
    callAPImeals();
  }, []);

  /* if (mealsBtn.length === 0) {
    return <div>Loading</div>;
  } */

  // console.log(APImealsClickCat());

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
      {mealsBtn.map((meal) => (
        <button
          key={ meal.strCategory }
          type="button"
          data-testid={ `${meal.strCategory}-category-filter` }
          onClick={ () => setMealsBtnCat(meal.strCategory) }
        >
          { meal.strCategory }
        </button>
      ))}
    </div>
  );
}
