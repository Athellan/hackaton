import "./App.scss";
import React from "react";
import FacebookIcon from "./assets/fb.png";
import InstaIcon from "./assets/inst.png";
import TwitterIcon from "./assets/tw.png";
import LightMode from "./assets/Vector.png";

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
    </div>
  );
}

export default App;
