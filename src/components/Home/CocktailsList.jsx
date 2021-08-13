import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCocktails, useCategory, fetchCategory, fetchCocktails } from '../../hooks';
import loading from '../../images/loading.gif';

function CocktailsList() {
  const { error, cocktails } = useCocktails();
  const { categorys } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  const magicalNumberCocktails = 12;
  const magicalNumberCategory = 5;

  useEffect(() => {
    if (!cocktails) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    const type = 'drinks';
    dispatch(fetchCategory({ category: type }));
  }, [dispatch, cocktails]);

  if (!categorys) {
    return (
      <img
        src={ loading }
        alt="carregando"
        width="100px"
      />
    );
  }

  if (error) {
    return (
      <p>deu errado filhao</p>
    );
  }

  const fetchAll = ({ target }) => {
    dispatch(fetchCocktails({ category: target.value, searchTerm: '' }));
    if (target.checked) {
      setSelectedCategory(target.value);
    }
    if (!target.checked) {
      setSelectedCategory('');
    }
  };

  const fetchCategorys = ({ target }) => {
    if (target.checked) {
      setSelectedCategory(target.value);
      const searchTerm = target.value;
      dispatch(fetchCocktails({ category: 'categorys', searchTerm }));
    } else {
      setSelectedCategory('');
      dispatch(fetchCocktails({ category: 'nome', searchTerm: '' }));
    }
  };

  return (
    <>
      <ol>
        { categorys.slice(0, magicalNumberCategory)
          .map((category, index) => (
            <label key={ index } htmlFor={ index }>
              <input
                id={ index }
                name="categorys"
                value={ category.strCategory }
                checked={ selectedCategory === category.strCategory }
                data-testid={ `${category.strCategory}-category-filter` }
                type="checkbox"
                onChange={ fetchCategorys }
              />
              {category.strCategory}
            </label>
          ))}
        <label htmlFor="Filtrar todos">
          <input
            id="allcategorys"
            checked={ selectedCategory === 'allcategorys' }
            data-testid="All-category-filter"
            name="categorys"
            onChange={ fetchAll }
            value="allcategorys"
            type="checkbox"
          />
          All
        </label>
      </ol>
      <ol>
        {cocktails && cocktails.length === 1 && <Redirect
          to={
            `/bebidas/${cocktails[0].idDrink}`
          }
        />}
        {cocktails && cocktails.slice(0, magicalNumberCocktails).map((drinks, index) => (
          <Link
            key={ drinks.idDrink }
            to={ `/bebidas/${drinks.idDrink}` }
          >
            <li data-testid={ `${index}-recipe-card` }>
              <img
                alt={ `Foto de uma ${drinks.strDrink}` }
                data-testid={ `${index}-card-img` }
                src={ drinks.strDrinkThumb }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                { drinks.strDrink }
              </h3>

            </li>
          </Link>
        ))}
      </ol>
    </>
  );
}

export default CocktailsList;
