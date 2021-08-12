import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../../../Components/footer/LowerMenu';
import HeaderExplore from '../../../Components/headers/HeaderExploreDrinks';

const ExplorerDrinks = () => {
  const [randowDrink, setRandoDrink] = useState([]);

  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const { drinks } = await fetch(endpoint).then((data) => data.json());
      setRandoDrink(drinks[0].idDrink);
    };
    getAPIById();
  }, [setRandoDrink]);

  return (
    <div>
      <HeaderExplore />
      <section>
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to={ `/bebidas/${randowDrink}` }>
          <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>
      </section>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
};

export default ExplorerDrinks;
