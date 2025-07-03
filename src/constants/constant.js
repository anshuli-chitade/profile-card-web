import qara from "../assets/images/projects/qara.png";
import xspaces from "../assets/images/projects/xspaces.png";
import vms from "../assets/images/projects/vms.png";
import checkin from "../assets/images/projects/checkin.png";

export const projectsData = [
  {
    title: "QARA – Quality Assurance with Rapid Automation",
    image: qara,
    url: "https://www.filmate.club/",
    shortDesc:
      "A test automation suite enhanced with custom Playwright reports.",
    fullDesc:
      "QARA is an internal automation suite integrated with Playwright reporting and monitoring capabilities. As a React developer, I created performant UI modules, applied hooks-based component structure, and developed reporting interfaces. The project focused on enhancing QA efficiency and integrating DevOps-ready test reports.",
    duration: "Feb 2022 – Present",
    role: "Frontend Developer",
    responsibilities: [
      "Developed dynamic dashboards and reporting UI in React.js",
      "Migrated class-based components to functional ones using Hooks",
      "Improved test visualization and filtering features for QA teams",
    ],
    learnings: [
      "React performance tuning",
      "Playwright report integration",
      "Clean UI architecture",
    ],
  },
  {
    title: "xSpaces – Multiplayer 3D Experience",
    image: xspaces,
    url: "https://yujisatojr.itch.io/highspeedchase",
    shortDesc:
      "A web-integrated 3D multiplayer experience using Unity and React.",
    fullDesc:
      "xSpaces is a gamified platform featuring multiplayer functionality. I contributed to building the interface using React.js and implemented integrations with Unity WebGL components. This allowed seamless interaction between frontend UI and the game canvas.",
    duration: "2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Built React.js interface to embed and control Unity 3D canvas",
      "Implemented communication between Unity and browser components",
      "Integrated game analytics and session tracking",
    ],
    learnings: [
      "Unity + React communication",
      "WebGL integration",
      "Game session analytics",
    ],
  },
  {
    title: "VMS – Visitor Management System",
    image: vms,
    url: "https://yujisatojr.itch.io/spacecraft", // Replace with real deployment link if different
    shortDesc: "Smart visitor check-in/check-out system with QR-based flow.",
    fullDesc:
      "VMS is an internal application built for managing real-time visitor check-ins. I contributed to frontend components using React, built reusable form elements, and connected the app to Loopback APIs for data processing. The system enables real-time badge generation, QR scanning, and log management.",
    duration: "2023 – Present",
    role: "Frontend Engineer",
    responsibilities: [
      "Developed React-based visitor and admin interface",
      "Integrated real-time API-driven check-in flow",
      "Optimized component reusability and responsiveness",
    ],
    learnings: [
      "Loopback API consumption",
      "Real-time form flows",
      "Reusable component design",
    ],
  },
  {
    title: "Check-In Agent – HRMS Module",
    image: checkin,
    url: "https://www.datumlearn.com/", // This looks unrelated — replace with internal HRMS link if needed
    shortDesc:
      "Part of HRMS suite for managing employee check-ins at office premises.",
    fullDesc:
      "The Check-In Agent is a React-based interface within the HRMS ecosystem that allows employees to register presence at work. I worked on component state handling using Redux, built timesheet UI, and connected with backend Nest.js services to store logs and validations.",
    duration: "2022 – 2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Created Redux-driven state management for attendance",
      "Built UI components for check-in and timesheet logs",
      "Collaborated with backend developers on Nest.js integration",
    ],
    learnings: [
      "Redux best practices",
      "HRMS domain workflows",
      "Backend collaboration",
    ],
  },
];
