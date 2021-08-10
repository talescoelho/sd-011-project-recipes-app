import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/video.css';

function VideoEmbeded() {
  const { idDetails } = useContext(AppContext);
  const url = idDetails && idDetails[0].strYoutube;
  const videoID = url && url.split('watch?v=')[1];
  console.log('videUrl', url);
  console.log('videOdetails', videoID);
  return (
    <div className="video-responsive" data-testid="video">
      <iframe
        src={ `https://www.youtube.com/embed/${videoID}` }
        frameBorder="0"
        allow="accelerometer;
        autoplay; clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoEmbeded;
