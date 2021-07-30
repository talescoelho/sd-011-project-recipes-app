import React from 'react';
import Header from '../components/Header';

function Foods() {
  const headerProps = {
    title: 'Comidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      <Header props={ headerProps } />
    </div>
  );
}

export default Foods;
