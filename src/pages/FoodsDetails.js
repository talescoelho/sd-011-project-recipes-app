import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import getMealById from '../services/getMealById';

function FoodsDetails(props) {
  const [meal, setMeal] = useState('');
  // const history = useHistory();
  const { match: { params: { id } } } = props;
  console.log(meal);

  useEffect(() => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const { meals } = await getMealById(endpoint);
      setMeal(meals[0]);
    };
    getMealDetails();
  }, []);

  function renderDetails() {
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="somefood"
          src={ meal.strMealThumb }
          height="350px"
        />
        <div>
          <h3 data-testid="recipe-title">{ meal.strMeal }</h3>
          <input
            type="image"
            alt="someText"
            data-testid="share-btn"
            src={ shareIcon }
          />
          <input
            type="image"
            alt="someText"
            data-testid="favorite-btn"
            src={ blackHeartIcon }
          />
        </div>
        <p data-testid="recipe-category">{ meal.strCategory }</p>
      </div>
    );
  }

  function createIngredArray() {
    const ingredArray = Object.entries(meal)
      .filter((key) => key[0].includes('strIngredient'));
    const ingredList = [];
    ingredArray.forEach((item) => ingredList.push(item[1]));
    return ingredList;
  }

  function createMeasuArray() {
    const measureArray = Object.entries(meal)
      .filter((key) => key[0].includes('strMeasure'));
    const measureList = [];
    measureArray.forEach((item) => measureList.push(item[1]));
    return measureList;
  }

  function renderIngredList() {
    const ingredList = createIngredArray();
    const measureList = createMeasuArray();

    return (
      <ul>
        {ingredList.map((ingred, index) => {
          if (ingred) {
            return (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingred} - ${measureList[index]}`}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  function renderInstructions() {
    return (
      <p
        data-testid="instructions"
      >
        { meal.strInstructions }
      </p>
    );
  }

  // <iframe
  //   width="360"
  //   height="180"
  //   src="https://www.youtube.com/embed/4aZr5hZXP_s"
  //   title="YouTube video player"
  //   frameBorder="0"
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //   allowFullScreen
  // />

  function renderVideo() {
    const urlLink = meal.strYoutube;
    console.log(urlLink);
    const youtubeVideoId = urlLink && urlLink.split('v=', 2)[1];
    const embeddedLink = `https://www.youtube.com/embed/${youtubeVideoId}`;
    const allowed = 'accelerometer; clipboard-write; encrypted-media; picture-in-picture';

    return (
      <iframe
        data-testid="video"
        title={ meal.strMeal }
        src={ embeddedLink }
        width="360"
        height="180"
        frameBorder="0"
        allow={ allowed }
        allowFullScreen
      >
        {meal.strMeal}
      </iframe>
    );
  }

  return (
    <div>
      {meal && renderDetails()}
      {renderIngredList()}
      {renderInstructions()}
      {renderVideo()}
    </div>
  );
}

export default FoodsDetails;
