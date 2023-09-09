import React, { useEffect } from 'react';
import './Home.css';
import Logo from '../assets/home-images/logo.png';
import Lomri from '../assets/home-images/fox.png';

function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@600&family=Abril+Fatface&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@600&family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="nav">
          <div className="nav-sub" id="logo-div">
            <img src={Logo} id="nav-logo" alt="This is an image" />
          </div>
          <div className="nav-sub">
            <a href="">About Us</a>
          </div>
          <div className="nav-sub">
            <a href="">Domains</a>
          </div>
          <div className="nav-sub">
            <a href="">Events</a>
          </div>
          <div className="nav-sub">
            <a href="">Blog</a>
          </div>
          <div className="nav-sub">
            <a href="">Teams</a>
          </div>
        </div>
        <div className="main">
          <div className="main_content-text" id="particles-js">
            <div className="main-content-sub" id="main-content-sub-heading">
              MOZILLA FIREFOX CLUB
            </div>
            <div className="main-content-sub" id="main-content-sub-description">
              A Student Club in VIT Vellore
            </div>
          </div>
          <div className="main_content-image">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player
              src="https://lottie.host/8b346c4b-3826-424d-8308-fcce5bd21e1d/9pX1BcWtzk.json"
              background="transparent"
              speed="0.2"
              style={{
                width: '1000px',
                height: '800px',
                position: 'absolute',
                marginLeft: '20px',
                marginTop: '-130px',
              }}
              loop
              autoplay
            ></lottie-player>
            <img src={Lomri} alt="" id="fox (lomri)" />
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home;