import React from 'react';
import Header from '../components/Header';

export default function Foods() {
  return (
    <main>
      <Header title="Comidas" haveSearchBtn searchTrigger="themealdb" />
    </main>
  );
}
