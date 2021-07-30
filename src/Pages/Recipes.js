import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

export default function Recipes() {
  return (
    <div>
      <Header />
      <Cards ApiCallMeals ApiCallCockTails={ false } />
      <Footer />
    </div>
  );
}
