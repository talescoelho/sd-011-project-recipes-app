import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import ProductRenderHelper from '../helpers/ProductRenderHelper';

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

  const { typeFilterKey, typeFilter } = searchLinks;

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
      <ButtonGroup className="main-button-group">
        <Button
          variant="success"
          type="button"
          onClick={ (e) => searchByCategory(e) }
          data-testid="All-category-filter"
          name="All"
        >
          All
        </Button>
        {
          categories.length === 0
            ? <p>Loading</p>
            : categories[typeFilterKey]
              .slice(0, maxArrayCategories)
              .map((categorie, index) => (
                <Button
                  variant="success"
                  key={ index }
                  type="button"
                  data-testid={ `${categorie.strCategory}-category-filter` }
                  onClick={ (e) => searchByCategory(e) }
                  name={ categorie.strCategory }
                >
                  {categorie.strCategory}
                </Button>
              ))
        }
      </ButtonGroup>
      { ProductRenderHelper(
        data,
        typeFilter,
        typeFilterKey,
        maxArrayProducts,
      ) }

    </main>
  );
}

export default ProductsDisplay;
