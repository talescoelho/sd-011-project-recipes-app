import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';
import CardsList from '../../components/CardsList';

export default function Drinks() {
  return (
    <main>
      <section>
        <SearchBarProvider>
          <Header title="Explorar Bebidas" search fetchType="thecocktaildb" />
          <CardsList fetchType="thecocktaildb" />
        </SearchBarProvider>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
