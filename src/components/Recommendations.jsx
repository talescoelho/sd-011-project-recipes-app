import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { searchRecommendation } from '../services';
import FoodCard from './FoodCard';
import '../styles/Recommendations.css';

export default function Recommendations() {
  const START_POSITION = -1170;
  const CHANGER = 180;
  const MULTIPLIER = 23;

  const { pathname } = useLocation();
  const [recommendation, setRecommendations] = useState([]);
  const [number, setNumber] = useState(START_POSITION);

  useEffect(() => {
    const getRecommendation = async () => {
      const type = pathname.includes('/bebidas') ? 'bebidas' : 'comidas';
      const list = await searchRecommendation(type);
      setRecommendations(list);
    };

    getRecommendation();
  }, []);

  useEffect(() => {
    const changeRecommendation = () => {
      const carroussel = document.querySelector('.carroussel-content');
      carroussel.style.transform = `translateX(${number}px)`;
    };

    changeRecommendation();
  }, [number]);

  return (
    <div className="recommendation-container">
      <h4 className="recommendation-title">Recomendadas</h4>
      <div className="recommendation-carroussel">
        <label htmlFor="right">
          <input
            type="button"
            className="arrow-r"
            id="right"
            onClick={ () => {
              if (number < 0) setNumber(number + CHANGER);
            } }
          />
        </label>
        <div className="carroussel-content">
          {recommendation && recommendation.map((rec, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              className="carroussel-item"
            >
              <FoodCard
                recipe={ rec }
                index={ index }
              />
            </div>
          ))}
        </div>
        <label htmlFor="left">
          <input
            type="button"
            id="left"
            className="arrow-l"
            onClick={ () => {
              if (number > -CHANGER * MULTIPLIER) setNumber(number - CHANGER);
            } }
          />
        </label>
      </div>
    </div>
  );
}
