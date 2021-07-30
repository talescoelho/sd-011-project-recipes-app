import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header pageName="Comidas" renderButton />
      <h1> Hello, this is my Home Page</h1>
    </div>
  );
}
