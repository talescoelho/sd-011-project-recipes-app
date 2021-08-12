import React from 'react';
import ErrorGif from '../images/error.gif';

function NotFound() {
  return (
    <img
      src={ ErrorGif }
      alt="Not Found"
      height="300px"
      width="300px"
    />
  );
}

export default NotFound;
