import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';
import CardsList from '../../components/CardsList';

export default function Foods() {
  return (
    <main>
      <section>
        <SearchBarProvider>
          <Header title="Explorar Comidas" search fetchType="themealdb" />
          <CardsList fetchType="themealdb" />
        </SearchBarProvider>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
