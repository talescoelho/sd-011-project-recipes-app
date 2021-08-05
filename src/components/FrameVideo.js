import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function FrameVideo() {
  const { recipeDetail: recipe } = useContext(RecipesContext);
  return (
    <div className="container">
      <h3 className="text-center">Video</h3>
      <div className="embed-responsive embed-responsive-1by1">
        {
          recipe.strYoutube !== undefined
         && (<iframe
           src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
           data-testid="video"
           className="embed-responsive-item"
           allowFullScreen
           title="Youtube Video"
         />)
        }
      </div>
    </div>
  );
}

export default FrameVideo;
