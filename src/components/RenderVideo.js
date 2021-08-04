import React from 'react';

function RenderVideo({src, title, id, type}) {
  const url = (`${src}`).replace("watch?v=", "embed/");
  return (
    <iframe 
      width="560"
      height="315"
      src={url}
      title={`Recipe ${title}`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      data-testid={`${id}`}
    ></iframe>
  );
}

export default RenderVideo;