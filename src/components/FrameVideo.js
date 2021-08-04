import React from 'react';
import PropTypes from 'prop-types';

function FrameVideo({ recipe }) {
  return (
    <div>
      <h3>Video</h3>
      <iframe
        data-testid="video"
        width="400"
        height="300"
        src={ recipe.strYoutube }
        frameBorder="0"
        allow="accelerometer;
        autoplay; clipboard-write;
        encrypted-media; gyroscope;
        picture-in-picture"
        allowFullScreen
        title="Youtube Video"
      />
    </div>
  );
}

FrameVideo.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FrameVideo;
