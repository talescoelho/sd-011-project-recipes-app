import React, { useState, useEffect } from 'react';
import HeaderExpFoodsOrigin from '../../../Components/headers/HeaderExploreFoodsOrigin';
import LowerMenu from '../../../Components/footer/LowerMenu';

const Origen = () => {
  const [originList, setOriginList] = useState([]);
  const [mealsByOrigin, setMealsByOrigin] = useState([]);
  const [onSelectChange, setOnSelectChange] = useState(false);

  useEffect(() => {
    const getAPI = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setOriginList(meals);
    };
    getAPI();
  }, [setOriginList]);
  console.log(onSelectChange);
  useEffect(() => {
    const getAPI = async () => {
      const endpoint = `www.themealdb.com/api/json/v1/1/filter.php?a=${originList}`;
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setMealsByOrigin(meals);
    };
    getAPI();
  }, [setMealsByOrigin, originList]);

  return (
    <div>
      <HeaderExpFoodsOrigin />
      <section>
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ () => setOnSelectChange(!onSelectChange) }
        >
          { originList && originList.map(({ strArea }, index) => (
            <option
              key={ index }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              { strArea }
            </option>
          ))}
          <option value="All" data-testid="All-option">All</option>
        </select>
      </section>
      <section>
        { onSelectChange && mealsByOrigin && mealsByOrigin.map((strArea, index) => (
          <div
            key={ index }
            data-testid={ `${strArea}-option` }
          >
            { strArea }
          </div>
        ))}
      </section>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
};

export default Origen;
