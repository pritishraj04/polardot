import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="image-container">
        <img src="./images/side-section.png" alt="" />
      </div>

      {/* <video src="/videos/banner.mp4" autoPlay loop muted /> */}
      <div className="content-container">
        <h1>Human centric designs for a scalable business growth.</h1>
        <p>
          Here at studio we work on Editorial Design, Web Design, Packaging
          Design and Branding.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Start a Project
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Ring a Bell
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
