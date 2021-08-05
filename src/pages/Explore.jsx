import React from 'react';
import { useLocation } from 'react-router-dom';
import ExploreFoodAndDrink from '../components/ExploreFoodAndDrink';
import ExploreInitial from '../components/ExploreInitial';

export default function Explore() {
  const location = useLocation().pathname;
  return (
    <section className="explore-section">
      {(location === '/explorar') && <ExploreInitial />}
      { location === '/explorar/bebidas' && <ExploreFoodAndDrink />}
      { location === '/explorar/comidas' && <ExploreFoodAndDrink />}
    </section>
  );
}
