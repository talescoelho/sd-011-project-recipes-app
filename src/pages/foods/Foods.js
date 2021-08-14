import React, { useContext } from 'react';
import Header from '../../components/Header';
import { SearchBarContext } from '../../context/SearchBar';
import Footer from '../../components/Footer';
import CardsList from '../../components/CardsList';

export default function Foods() {
  const { ingred } = useContext(SearchBarContext);
  return (
    <main>
      <section>
        {/* <SearchBarProvider>
        </SearchBarProvider> */}
        <Header title="Explorar Comidas" search filterBar fetchType="themealdb" />
        <CardsList fetchType="themealdb" ingredient={ ingred } />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
