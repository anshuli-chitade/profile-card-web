import qara from "../assets/images/projects/qara.png";
import xspaces from "../assets/images/projects/xspaces.png";
import vms from "../assets/images/projects/vms.png";
import checkin from "../assets/images/projects/checkin.png";

export const projectsData = [
  {
    title: "QARA – Quality Assurance with Rapid Automation",
    image: qara,
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
    title: "xSpaces - Product Management Tool",
    image: xspaces,
    shortDesc:
      "A collaborative, spreadsheet-style workspace designed for structured product planning and team coordination.",
    fullDesc:
      "xSpaces is a web-based platform that enables teams to collaboratively manage product data in a flexible, spreadsheet-style environment. It supports structured workflows, grid-based editing, and custom views tailored to product planning needs. I contributed across both frontend and backend, working on interactive features, performance improvements, and overall application stability.",
    duration: "2023",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed and optimized user interface components using React.js and Material UI",
      "Built advanced features like Card View and Multi-Dimensional Value column field",
      "Implemented Summary View to present aggregated data insights",
      "Contributed to backend development using NestJS for data handling and business logic",
      "Fixed critical bugs and addressed SonarQube code smells for maintainable codebase",
      "Performed unit testing to ensure reliability of key modules",
      "Collaborated on deployment strategy and suggested improvements for CI/CD pipelines",
    ],
    learnings: [
      "Designing scalable UI components in React.js with Material UI",
      "Implementing complex data structures like multi-dimensional fields in a spreadsheet layout",
      "Writing clean and maintainable backend code using NestJS",
      "Applying unit testing and resolving static analysis issues (SonarQube)",
      "Improving application quality through performance tuning and code reviews",
    ],
  },
  {
    title: "VMS Visitor Management System",
    image: vms,
    shortDesc:
      "A full-stack visitor management solution with real-time QR check-ins, photo capture, and WhatsApp notifications.",
    fullDesc:
      "VMS is a comprehensive visitor management system designed to digitize and streamline the entire check-in process. I led the end-to-end development — from frontend to backend — handling all core functionalities independently. This included visitor photo capture and secure storage in Azure Blob Storage using SAS tokens, real-time QR-based check-ins, WhatsApp notifications with encrypted public links, and UI/UX design enhancements. I also integrated the entire module into the HRMS system via .aspx pages with SQL backend support.",
    duration: "2023 – Present",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed complete frontend using React.js with focus on usability and responsive design",
      "Captured visitor photos and securely stored them in Azure Blob Storage using SAS tokens",
      "Built backend services using Node.js and Prisma ORM for visitor data and audit logging",
      "Implemented real-time QR-based check-in and badge generation workflows",
      "Created encrypted public URLs and sent automated WhatsApp notifications to visitors",
      "Integrated the VMS module into HRMS using .aspx pages and SQL Server",
      "Handled critical issue resolution and performance optimization across the stack",
      "Contributed significantly to UI/UX flow and interface consistency",
    ],
    learnings: [
      "Full-stack architecture with Node.js, React, and Prisma ORM",
      "Secure media storage using Azure Blob Storage and SAS token authentication",
      "Real-time communication and third-party messaging (WhatsApp Business API)",
      "Cross-platform system integration (.NET-based HRMS + custom JS module)",
      "Building scalable, maintainable modules from scratch",
    ],
  },
  {
    title: "Check-In Agent – HRMS Module",
    image: checkin,
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
