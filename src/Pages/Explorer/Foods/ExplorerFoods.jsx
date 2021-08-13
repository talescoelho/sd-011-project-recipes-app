import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderExploreFoods from '../../../Components/headers/HeaderExploreFoods';
import LowerMenu from '../../../Components/footer/LowerMenu';

const ExplorerFoods = () => {
  const [randowMeam, setRandoMeal] = useState([]);

  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setRandoMeal(meals[0].idMeal);
    };
    getAPIById();
  }, [setRandoMeal]);

  return (
    <div>
      <HeaderExploreFoods />
      <section>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${randowMeam}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </section>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
};

export default ExplorerFoods;
