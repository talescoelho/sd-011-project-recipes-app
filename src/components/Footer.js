import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer data-testid="footer">
      <p>Menu inferior</p>
      <Link to="/bebidas" data-testid="drinks-bottom-btn">Drinks</Link>
      <br />
      <Link to="/explorar" data-testid="explore-bottom-btn">Explorar</Link>
      <br />
      <Link to="/comidas" data-testid="food-bottom-btn">Foods</Link>
      <br />
    </footer>
  );
}

export default Footer;
