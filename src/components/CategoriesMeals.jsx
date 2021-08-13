import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import { APImeals, APImealsByCat } from '../services/APImealsANDdrinks';

export default function CategoriesMeals() {
  const { setMealsBtnCat, setMeals } = useContext(UserContext);

  const [mealsBtn, setMealsBtn] = useState([]);

  useEffect(() => {
    const callAPImeals = async () => {
      const callAPI = await APImealsByCat();
      setMealsBtn(callAPI);
    };
    callAPImeals();
  }, []);

  const callAPImeals3 = async () => {
    const callAPI = await APImeals();
    const result = callAPI;
    setMeals(result);
  };

  return (
    <div className="btn-categories">
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => callAPImeals3() }
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
