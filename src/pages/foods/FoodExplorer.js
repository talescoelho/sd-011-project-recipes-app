import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import ByIngredient from '../../components/ByIngredient';
import Footer from '../../components/Footer';
import fetchByFilter from '../../services/data';

export default function FoodExplorer() {
  const history = useHistory();
  const [idRandomFood, setIdRandomFood] = useState('');

  useEffect(() => {
    const getRandomFood = async () => {
      const urlToFetch = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const { meals } = await fetchByFilter(urlToFetch);
      setIdRandomFood(meals[0].idMeal);
    };
    getRandomFood();
  }, []);

  const buttonStyle = { display: 'block', margin: '10px auto', width: '200px' };

  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Comidas" />
      </SearchBarProvider>
      <section style={ { marginTop: '50px' } }>
        <ByIngredient />
        <Button
          style={ buttonStyle }
          variant="primary"
          data-testid="explore-by-area"
          type="button"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
        </Button>
        <Button
          style={ buttonStyle }
          variant="primary"
          data-testid="explore-surprise"
          type="button"
          onClick={ () => history.push(`/comidas/${idRandomFood}`) }
        >
          Me Surpreenda!
        </Button>
      </section>
      <Footer />
    </>
  );
}
