import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIngredients,
  fetchCardsByIngredients,
} from '../services/FoodOrigin';
import { setLoadingState } from '../Redux/reducers/recipes';

export default function FoodIngredients({ type }) {
  const { loaded } = useSelector((state) => state.recipes.cards);

  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const redirect = useMemo(() => {
    const obj = {
      meals: 'comidas',
      drinks: 'bebidas',
    };
    return obj[type];
  }, [type]);

  useEffect(() => {
    const fetchIngr = async () => {
      const r = await getIngredients(type);
      dispatch(setLoadingState());
      setIngredients(r);
    };
    fetchIngr();
  }, [dispatch, type]);

  useEffect(() => {
    if (loaded) {
      history.push(`/${redirect}`);
    }
  }, [history, loaded, redirect]);

  const renderFilteredIngredients = (ingredient) => {
    dispatch(fetchCardsByIngredients(ingredient, type));
  };

  const renderIngredients = () => ingredients.map((el, index) => {
    const { title, src } = el;
    return (
      <button
        className="ingredient-button"
        key={ index }
        type="button"
        onClick={ () => renderFilteredIngredients(title) }
      >

        <Card data-testid={ `${index}-ingredient-card` }>
          <Card.Header>
            <h4
              className="my-0 font-weight-normal"
              data-testid={ `${index}-card-name` }
            >
              {title}
            </h4>
          </Card.Header>
          <Card.Body className="card-body">
            <img src={ src[type] } alt={ title } data-testid={ `${index}-card-img` } />
          </Card.Body>
        </Card>

      </button>
    );
  });

  return renderIngredients();
}
