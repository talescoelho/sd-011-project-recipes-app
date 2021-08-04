import React from 'react';
import Header from '../components/Header';

import { RequestHook } from '../Context/RequestHook';

function drinkPage() {
  const { filteredDrink } = RequestHook();

  return (
    <div>
      <Header title="Bebidas" search />

      { filteredDrink.length > 0
        ? filteredDrink.map((drink) => (
          <div key={ drink.strDrink }>
            <h3>
              { drink.strDrink }
            </h3>
          </div>
        ))
        : 'vazio' }

    </div>
  );
}

export default drinkPage;
