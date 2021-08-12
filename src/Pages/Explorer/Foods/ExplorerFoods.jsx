import React from 'react';
import { Link } from 'react-router-dom';
import HeaderExploreFoods from '../../../Components/headers/HeaderExploreFoods';
import LowerMenu from '../../../Components/footer/LowerMenu';

const ExplorerFoods = () => (
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
      <Link to="/">
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

export default ExplorerFoods;
