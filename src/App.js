import "./App.scss";
import React from "react";
import FacebookIcon from "./assets/fb.png";
import InstaIcon from "./assets/inst.png";
import TwitterIcon from "./assets/tw.png";
import LightMode from "./assets/Vector.png";
import Cubes from "./assets/cubes.png";
import Gus from "./assets/gus.png";
import Astro from "./assets/astro.png";
import Arrow from "./assets/arrow.png";

function App() {
  return (
    <div className="App">
      {/* Start Left Band */}
      <div className="left__band">
        <h1 className="left__band-logo">Xae</h1>
        <div className="left__band-icons">
          <div className="facebook">
            <img
              src={FacebookIcon}
              alt="FacebookIcon"
              className="facebook__icon"
            />
          </div>
          <div className="instagram">
            <img src={InstaIcon} alt="InstaIcon" className="instagram__icon" />
          </div>
          <div className="twitter">
            <img
              src={TwitterIcon}
              alt="twitterIcon"
              className="twitter__icon"
            />
          </div>
        </div>
      </div>
      {/* End Left Band */}

      {/* Start Nav */}
      <div className="nav">
        <h3 className="nav__options">Home</h3>
        <h3 className="nav__options">About</h3>
        <h3 className="nav__options">Gallery</h3>
        <h3 className="nav__options">Contact</h3>
        <img src={LightMode} alt="" className="nav__mode" />
      </div>
      {/* End Nav */}

      {/* Start Cubes + Astro */}
      <div className="wallpaper">
        <div className="wallpaper__title">
          <h1>Adventure Together</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
            potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut
            cras nullam porta id dolor arcu, quis.
          </p>
        </div>
        <img className="wallpaper__cubes" src={Cubes} alt="" />
        <img className="wallpaper__gus" src={Gus} alt="" />
      </div>
      {/* End Cubes + Astro */}

      {/* Start Bottom Banner */}
      <div className="bottom__banner">
        <img src={Astro} alt="astronautre" className="bottom__banner-image" />
        <div className="bottom__banner-content">
          <h2>Exploration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
            potenti faucibus nec, rhoncus, vulputate
          </p>
        </div>
        <div className="bottom__banner-arrow">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      {/* End Bottom Banner */}
    </div>
  );
}

export default App;
