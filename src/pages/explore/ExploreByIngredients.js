import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreByIngredients() {
  const [data, setData] = React.useState([]);
  const fetchIngredients = async () =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const dataFetch = await response.json();
    setData([...dataFetch.meals]);
  };

  React.useEffect(() => {
    fetchIngredients();
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      
      <Footer />
    </div>
  );
}
