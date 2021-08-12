import React from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../../../Components/footer/LowerMenu';
import HeaderExplore from '../../../Components/headers/HeaderExploreDrinks';

const ExplorerDrinks = () => (
  <div>
    <HeaderExplore />
    <section>
      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
      </Link>
    </section>
    <footer>
      <LowerMenu />
    </footer>
  </div>
);

export default ExplorerDrinks;
