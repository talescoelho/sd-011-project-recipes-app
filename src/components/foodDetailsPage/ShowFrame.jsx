import React from 'react';

export default function ShowFrame(food) {
  function getVideoId() {
    if (food.strYoutube) {
      const urlYT = food.strYoutube;

      return urlYT.substring(urlYT.indexOf('v=') + 2);
    }
    return '';
  }

  const showFrame = () => {
    if (food) {
      return (<iframe
        data-testid="video"
        title="Vídeo da Receita"
        frameBorder="0"
        allow="encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={ `https://www.youtube.com/embed/${getVideoId()}` }
        width="100%"
      />);
    }
  };
  return showFrame();
}
