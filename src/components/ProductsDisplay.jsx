import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyContext from '../context/MyContext';

function ProductsDisplay() {
  const {
    foodsSearchLinks,
    drinksSearchLinks,
    data,
    setData,
  } = useContext(MyContext);

  const { pathname } = useLocation();
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const maxArrayProducts = 12;
  const maxArrayCategories = 5;
  const [searchLinks] = useState(() => {
    if (pathname === '/comidas') {
      return foodsSearchLinks;
    } if (pathname === '/bebidas') {
      return drinksSearchLinks;
    }
  });

  // const [data, setData] = useState([]);

  console.log(searchLinks);

  const { typeFilterKey, typeFilter } = searchLinks;
  const infos = {
    id: `id${typeFilter}`,
    str: `str${typeFilter}`,
    thumb: `str${typeFilter}Thumb`,
  };

  useEffect(() => {
    async function productCategories() {
      const { fetchCategories } = searchLinks;
      const response = await fetch(fetchCategories);
      const json = await response.json();
      setCategories(json);
    }

    productCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const { fetchAll: endpoint } = searchLinks;
      const response = await fetch(endpoint);
      const json = await response.json();
      setData({ results: json, location: pathname });
    }
    if (toggle) {
      const changeCategorieFood = async () => {
        const { filterByCategory: endpoint } = searchLinks;
        const response = await fetch(`${endpoint}${toggle}`);
        const json = await response.json();
        setData({ results: json, location: pathname });
      };
      changeCategorieFood();
    } else {
      fetchProducts();
    }
  }, [toggle]);

  useLayoutEffect(() => {
    async function productCategories() {
      const { fetchCategories: endpoint } = searchLinks;
      const response = await fetch(endpoint);
      const json = await response.json();
      setCategories(json);
    }

    productCategories();
  }, []);

  function searchByCategory({ target }) {
    if (target.name === 'All') {
      setToggle('');
    } else if (toggle === target.name) {
      setToggle('');
    } else if (toggle === '') {
      setToggle(target.name);
    } else {
      setToggle(target.name);
    }
  }

  return (
    <main>
      <button
        type="button"
        onClick={ (e) => searchByCategory(e) }
        data-testid="All-category-filter"
        name="All"
      >
        All
      </button>
      {
        categories.length === 0
          ? <p>Loading</p>
          : categories[typeFilterKey]
            .slice(0, maxArrayCategories)
            .map((categorie, index) => (
              <div key={ index }>
                <button
                  type="button"
                  data-testid={ `${categorie.strCategory}-category-filter` }
                  onClick={ (e) => searchByCategory(e) }
                  name={ categorie.strCategory }
                >
                  {categorie.strCategory}
                </button>
              </div>
            ))
      }
      {
        data.location !== pathname
          ? <p>Loading</p>
          : data
            .results[typeFilterKey]
            .slice(0, maxArrayProducts)
            .map((product, index) => (
              <Link to={ `${pathname}/${product[infos.id]}` } key={ index }>
                <div data-testid={ `${index}-recipe-card` }>
                  <img
                    src={ product[infos.thumb] }
                    alt="comida_principal"
                    data-testid={ `${index}-card-img` }
                    width="50px"
                  />
                  <p data-testid={ `${index}-card-name` }>{product[infos.str]}</p>
                </div>
              </Link>
            ))
      }
    </main>
  );
}

export default ProductsDisplay;
