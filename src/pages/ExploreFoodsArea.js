import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoodsArea() {
  const [areas, setAreas] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    function fetchAreas() {
      fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then((response) => response.json())
        .then((data) => setAreas(data))
        .catch((erro) => setError(erro));
    }

    function fetchCategories() {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((erro) => setError(erro));
    }

    fetchAreas();
    fetchCategories();

  }, []);

  if (!areas || !categories) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>A API retornou um erro, tente novamente em instantes...</p>;
  }

  console.log(categories.categories)

  return (
    <div>
      <Header title="Explorar Origem" />
      <div>
        <select data-testid="explore-by-area-dropdown">
          {areas.meals.filter((_, index) => index < 12).map(({ strArea }, index) => (
            <option
              key={ index }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div data-testid='all-category-filter'>
          {/* <img src={category.strCategoryThumb} alt={category.strCategory} /> */}
          <h3>All</h3>
        </div>
        {categories.categories.filter((_, index) => index < 11).map((category, index) => (
          <div key={ index } data-testid={ `${category.strCategory}-category-filter` }>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
