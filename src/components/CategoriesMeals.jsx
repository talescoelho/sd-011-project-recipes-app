import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import '../css/mainPage.css';
import { APImeals, APImealsByCat } from '../services/APImealsANDdrinks';

export default function CategoriesMeals() {
  const { setMealsBtnCat, setMeals } = useContext(UserContext);

  const [mealsBtn, setMealsBtn] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

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

  // corrigir - No terceiro click no filtro seguido ele não filtra corretamente. Infvestigar.
  function toggleFilterBtn(strCategory) {
    if (activeFilter && strCategory === activeCategory) {
      callAPImeals3();
      setActiveFilter(false);
      setActiveCategory('');
    } else {
      setMealsBtnCat(strCategory);
      setActiveCategory(strCategory);
      setActiveFilter(true);
    }
  }

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
          onClick={ () => toggleFilterBtn(meal.strCategory) }
        >
          { meal.strCategory }
        </button>
      ))}
    </div>
  );
}
