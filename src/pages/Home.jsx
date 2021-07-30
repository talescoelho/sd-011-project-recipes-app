import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';

export default function Home() {
  return (
    <div>
      <Header pageName="Comidas" renderButton />
      <main>
        <h1> Hello, this is my Home Page</h1>
      </main>
      <Footer />
    </div>
  );
}
