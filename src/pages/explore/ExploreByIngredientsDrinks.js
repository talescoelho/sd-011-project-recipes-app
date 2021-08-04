import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExploreByIngredientsDrinks() {
  const magicNumberFive = 12;
  const [data, setData] = React.useState([]);
  const fetchIngredients = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const dataFetch = await response.json();
    console.log(dataFetch.drinks);
    setData([...dataFetch.drinks]);
  };

  React.useEffect(() => {
    fetchIngredients();
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {data && data.slice(0, magicNumberFive).map((item, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-card` }>
          <h2
            data-testid={ `${index}-card-name` }
          >
            { item.strIngredient1 }
          </h2>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
            alt={ item.strIngredient1 }
          />
        </div>))}
      <Footer />
    </div>
  );
}
