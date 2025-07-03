import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Experience History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              The Digital Group Infotech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineer, Pune, Maharashtra
            </h4>
            <p>
              Currently contributing as a Full-Stack Engineer, driving project
              delivery, and collaborating across teams for strategic business
              development and technical execution.{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              The Digital Group Infotech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Trainee, Pune, Maharashtra
            </h4>
            <p>
              Built strong foundations in full-stack development, gained
              hands-on experience in frontend/backend integration, and developed
              agile practices, focusing on user-centric product design.{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Web Page Designing & Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Infinite Graphix Technologies, Pune, Maharashtra
            </h4>
            <p>
              Completed an in-depth training program covering the essentials of
              web development, including UI/UX, server-side scripting, and
              responsive design best practices.{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              FACE - Focus Academy Career Enhancement Pvt. Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Associate Trainer, Coimbatore, Tamil Nadu
            </h4>
            <p>
              Provided aptitude and soft skill training, helping students boost
              their confidence and performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Priyadarshini College of Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nagpur, maharashtra
            </h4>
            <p>
              Earned a Bachelor's degree in Information Technology, laying the
              groundwork for my journey into full-stack development and
              real-world projects.{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
