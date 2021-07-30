import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFood } from '../services/FoodAPI';

export default function FoodDetails() {
  const params = useParams();
  const [food, setFood] = useState();

  useEffect(() => {
    const getFood = async () => {
      const data = await fetchFood(params.id);
      console.log(data);
      setFood(data);
    };
    getFood();
  }, [params.id]);

  return (
    <div>
      a
    </div>
  );
}
