import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import searchIcon from '../images/searchIcon.svg';

function ExploreMealsByArea() {
  return (
    <div>
      <Header title="Explorar Origem" />
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="imagem lupa"
      />
      <Footer />
    </div>
  );
}

export default ExploreMealsByArea;
