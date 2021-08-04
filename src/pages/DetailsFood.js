import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import DetailHeader from '../components/DetailHeader';
import DetailIngredient from '../components/DetailIngredient';
import DetailInstruction from '../components/DetailInstruction';

import '../components/styles/details.css';

function DetailsFood() {
  const { id } = useParams();
  const { setFoodDetails, getFoodById } = useContext(MyContext);

  const [load, setLoad] = useState(true);
  const food = useCallback(async () => {
    const fetch = await getFoodById(id);
    console.log(fetch);
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = fetch[0].strYoutube.match(regExp);
    if (match !== null) {
      setFoodDetails({ ...fetch[0], url: `https://www.youtube.com/embed/${match[2]}` });
    } else {
      setFoodDetails({ ...fetch[0] });
    }

    setLoad(false);
  }, [getFoodById, id, setFoodDetails]);

  useEffect(() => {
    food();
  }, [food]);

  return !load ? (
    <main>
      <DetailHeader />
      <DetailIngredient />
      <DetailInstruction />
    </main>
  ) : <h1>Loading</h1>;
}

export default DetailsFood;

/* { /*  VIDEO DA RECEITA - FAZER UM COMPONENTE
 <section className="detail-video">
  <h1 className="detail-video-title">Video</h1>
  <div className="detail-video-box">
    <iframe
      className="detail-iframe"
      title={ foodDetails.strMeal }
      src={ foodDetails.url }
      frameBorder="0"
      data-testid="video"
    />
  </div>
</section> */
