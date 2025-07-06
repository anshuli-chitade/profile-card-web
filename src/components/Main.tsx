import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

import profile from "../assets/images/profile/profile_photo.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Anshuli Chitade - Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/anshuli-chitade"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/anshuli-chitade-b4b48a204"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1 className="hero-title">Hi, I'm Anshuli Chitade</h1>
          <p className="hero-subtitle" color="text.primary">
            Full Stack Engineer | Building scalable and user-friendly web apps.
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/anshuli-chitad"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/anshuli-chitade-b4b48a204"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
