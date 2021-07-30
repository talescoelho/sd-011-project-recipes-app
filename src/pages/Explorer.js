import React from 'react';
import Header from '../components/Header';

export default function Explorer() {
  const pageTitle = {
    pageName: 'Explorar',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar
    </div>
  );
}
