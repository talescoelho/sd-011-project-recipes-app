import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (

    <div className="not-found-page">
      <div className="container-fluid">
        <h1 className="not-found-title">404</h1>
        <div className="my-5 not-found-text">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/" className="not-found-button-back">Back to Home</Link>
        </div>
      </div>
    </div>

  );
}

export default NotFound;
