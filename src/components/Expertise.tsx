import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faServer, faTools } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontEndStack = [
  "Reactjs",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Redux",
  "Material-UI",
  "Bootstrap",
  "Reactstrap",
];

const backEndStack = [
  "Nodejs",
  "Loopback",
  "Nestjs",
  "MongoDb",
  "SQL",
  "Postman",
  "Prisma",
];

const devOpsStack = ["Git", "BitBucket", "Azure", "NGINX", "PM2"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front End Development</h3>
            <p>
              I specialize in building responsive, component-based UIs using
              React, TypeScript, and JavaScript. With strong fundamentals in
              HTML5, CSS3, and SCSS, I focus on creating user-friendly
              interfaces with a pixel-perfect approach.
            </p>{" "}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontEndStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I build scalable backend systems and RESTful APIs using Node.js
              frameworks like LoopBack and NestJS. I work with both SQL and
              NoSQL databases, using Prisma as an ORM for efficient data
              modeling. For API testing and documentation, I rely on tools like
              Postman and Swagger to ensure clean and reliable integrations.
            </p>{" "}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backEndStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faTools} size="3x" />
            <h3>Version Control & Deployment Tools</h3>
            <p>
              I support deployment workflows using tools like Git, Bitbucket,
              Azure, and PM2. I’ve configured NGINX for server environments and
              have experience deploying applications in a stable and
              maintainable manner.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devOpsStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
