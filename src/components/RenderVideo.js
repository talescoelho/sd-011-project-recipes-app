import React from 'react';
import PropTypes from 'prop-types';

function RenderVideo({ src, title, id }) {
  const url = (`${src}`).replace('watch?v=', 'embed/');
  return (
    <iframe
      width="560"
      height="315"
      src={ url }
      title={ `Recipe ${title}` }
      frameBorder="0"
      allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      data-testid={ `${id}` }
    />
  );
}

RenderVideo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RenderVideo;
