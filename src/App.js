import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';
import loginbg from './loginbg.mp4';

function App() {
  return (
    <div className="meals">
      <h2 className="title">Cozinhando com Gosto</h2>
      <video
        width="360"
        height="640"
        playsinline
        autoPlay
        muted
        loop
        className="bgVideo"
      >
        <source src={ loginbg } type="video/mp4" />
      </video>
      <Routes />
    </div>
  );
}

export default App;
