import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function Foods() {
  return (
    <main>
      <section>
        <SearchBarProvider>
          <Header title="Explorar Bebidas" search fetchType="thecocktaildb" />
        </SearchBarProvider>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
