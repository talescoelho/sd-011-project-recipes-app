import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMealRecomendations } from '../services/theMealAPI';
import { getDrinkRecomendations } from '../services/theCockTailAPI';
import RecomendationCard from './RecomendationCard';

export default function RecomendationCardsContainer() {
  const { pathname } = useLocation();
  const [recomendationData, setrecomendationData] = useState([]);
  const maxCardLength = 6;

  useEffect(() => {
    async function GetDataRecomendation() {
      if (pathname.match(/comidas/)) {
        const data = await getMealRecomendations() || [];
        setrecomendationData(data);
      } else {
        const data = await getDrinkRecomendations() || [];
        setrecomendationData(data);
      }
    }
    GetDataRecomendation();
  }, [pathname]);

  console.log(recomendationData);

  return (
    <div>
      {recomendationData.map((recipe, index) => {
        if (index < maxCardLength) {
          return (
            <RecomendationCard index={ index } recipe={ recipe } />
          );
        }
        return null;
      })}
    </div>
  );
}
