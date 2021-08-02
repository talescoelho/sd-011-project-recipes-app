import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  const headerProps = {
    title: 'Explorar',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      <Header props={ headerProps } />
      <Footer />
    </div>
  );
}

export default Explorer;
