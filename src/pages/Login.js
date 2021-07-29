import React from 'react';
import rockGlass from '../images/rockGlass.svg';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      Login
      <Footer />
    </div>
  );
}
