import React from 'react';
import { Route } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Comidas from './Comidas';
import Explorar from './Explorar';
import ExplorarBebidas from './ExplorarBebidas';
import ExplorarComidas from './ExplorarComidas';
import ExplorarPorOrigem from './ExplorarPorOrigem';
import Perfil from './Perfil';
import ReceitasFavoritas from './ReceitasFavoritas';
import ReceitasFeitas from './ReceitasFeitas';

const Page = () => (
  <div>
    <Header />
    <Route exact path="/comidas" component={ Comidas } />
    <Route exact path="/bebidas" component={ Comidas } />
    <Route exact path="/explorar" component={ Explorar } />
    <Route exact path="/perfil" component={ Perfil } />
    <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
    <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    <Route
      exact
      path="/explorar/comidas"
      component={ ExplorarComidas }
    />
    <Route
      exact
      path="/explorar/bebidas"
      component={ ExplorarBebidas }
    />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ () => <Header title="Explorar Ingredientes" /> }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ () => <Header title="Explorar Ingredientes" /> }
    />
    <Route
      exact
      path="/explorar/comidas/area"
      component={ ExplorarPorOrigem }
    />
    <Footer />
  </div>
);

export default Page;
