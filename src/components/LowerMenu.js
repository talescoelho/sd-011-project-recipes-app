import React from 'react';
import { Link } from 'react-router-dom';

export default function LowerMenu() {
  return (
    <footer data-testid="footer">
      <Link to="/explorar/bebidas" data-testid="drinks-bottom-btn">i</Link>
      <Link to="/explorar" data-testid="explore-bottom-btn">i</Link>
      <Link to="/explorar/comidas" data-testid="food-bottom-btn">i</Link>
    </footer>
  );
}
