import React from 'react';
import Header from '../components/Header';

import { RequestHook } from '../Context/RequestHook';

function foodPage() {
  const { filteredFood } = RequestHook();

  return (
    <div>
      <Header title="Comidas" search />

      { filteredFood.length > 0
        ? filteredFood.map((food) => (
          <div key={ food.strMeal }>
            <h3>
              { food.strMeal }
            </h3>
          </div>
        ))
        : 'vazio' }

    </div>
  );
}

export default foodPage;
