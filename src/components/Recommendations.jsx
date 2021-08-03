import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { searchRecommendation } from '../services';
import FoodCard from './FoodCard';
import '../styles/Recommendations.css';

export default function Recommendations() {
  const { pathname } = useLocation();
  const [recommendation, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendation = async () => {
      const type = pathname.includes('/bebidas') ? 'bebidas' : 'comidas';
      const list = await searchRecommendation(type);
      console.log(list);
      setRecommendations(list);
    }

    getRecommendation();
  }, [])

  console.log(recommendation);

  return (
    <div className="recommendation-container">
      <h1>Recomendados</h1>
      <div className="recommendation-carroussel">
        {recommendation && recommendation.map((rec, index) => (
          <FoodCard
            key={ index }
            recipe={ rec }
            index={ index }
          />
        ))}
      </div>
    </div>
  );
}
