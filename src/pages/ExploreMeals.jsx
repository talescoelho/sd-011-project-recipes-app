import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreButtons from '../components/ExploreButtons';

function ExploreFood() {
  return (
    <>
      <Header pageName="Explorar Comidas" />
      <main>
        <ExploreButtons type="meals" />
      </main>
      <Footer />
    </>
  );
}

export default ExploreFood;
