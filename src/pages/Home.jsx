import React from 'react';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';

export default function Home() {
  return (
    <div>
      <Header pageName="Comidas" renderButton />
      <main>
        <FoodCard />
      </main>
      <Footer />
    </div>
  );
}
