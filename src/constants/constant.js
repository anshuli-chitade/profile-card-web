import qara from "../assets/images/projects/qara.png";
import xspaces from "../assets/images/projects/xspaces.png";
import vms from "../assets/images/projects/vms.png";
import checkin from "../assets/images/projects/checkin.png";

export const projectsData = [
  {
    title: "QARA – Quality Assurance with Rapid Automation",
    image: qara,
    shortDesc:
      "A test automation suite powered by React, with custom dashboards and reporting tools.",
    fullDesc:
      "QARA is an QA automation platform enhanced with selenium-reporting, Playwright-based reporting and monitoring features. I led frontend development using React.js, implementing dynamic dashboards, reusable components, and optimized UIs. Migrated legacy class components to functional components using Hooks, resulting in cleaner, more maintainable code. Collaborated closely with product managers and designers to deliver intuitive interfaces, while integrating RESTful APIs and third-party services like JIRA and GitHub. Also contributed to deployment optimization using NGINX and PM2.",
    duration: "Feb 2022 - Mar 2024",
    role: "Frontend Developer",
    responsibilities: [
      "Developed and optimized React.js components, improving UI performance by 30%",
      "Implemented React Hooks to reduce redundant code and enhance readability",
      "Led migration from class-based to functional components, reducing complexity by 50%",
      "Integrated RESTful APIs using Loopback for efficient data exchange",
      "Collaborated with designers and PMs to enhance UI/UX, boosting user engagement by 20%",
      "Improved Git workflow with better commit practices and team collaboration",
      "Integrated third-party services such as JIRA and GitHub for extended functionality",
      "Configured and managed NGINX and PM2 for reliable application deployment",
    ],
    learnings: [
      "Advanced React performance optimization techniques",
      "Clean architecture with reusable functional components",
      "Playwright report integration into QA workflows",
      "Efficient API design and frontend-backend communication",
      "Deployment and server management using NGINX and PM2",
    ],
  },
  {
    title: "Check-In Agent",
    image: checkin,
    shortDesc:
      "Automated attendance and productivity tracking solution tailored for remote work within the HRMS suite.",
    fullDesc:
      "Designed and developed a fully automated system to capture employee productivity and attendance for remote work scenarios. Leveraged .NET services to track user events such as system boot, keystrokes, mouse activity, and window focus. Integrated a local SQLite database to temporarily store data, which is later structured and synced to a centralized DB. Eliminated manual check-ins by detecting Microsoft Teams launch, ensuring accurate attendance without employee intervention. Built React dashboards for real-time productivity insights, including call participation time, app usage categorization, and repetitive action detection.",
    duration: "March 2024 - June 2024",
    role: "Full Stack Developer",
    responsibilities: [
      "Engineered .NET Windows services to capture system-level events like startup, input activity, and active windows",
      "Implemented automated attendance by detecting Microsoft Teams launch, replacing manual check-ins",
      "Designed a syncing pipeline from SQLite to a central database for structured log management",
      "Developed React dashboards to visualize productivity, availability, and app usage breakdowns",
      "Enabled managers to categorize tools (e.g., communication, development) for detailed reporting",
      "Integrated logic to detect repetitive user actions and flag suspicious patterns",
    ],
    learnings: [
      "Advanced system event tracking and background service design in .NET",
      "Effective data structuring and syncing between local and central databases",
      "Real-time visualization of user productivity in React",
      "Enhanced user behavior analysis for remote workforce",
      "Automation techniques to improve accuracy and eliminate manual workflows",
    ],
  },
  {
    title: "xSpaces - Product Management Tool",
    image: xspaces,
    shortDesc:
      "A collaborative, spreadsheet-style workspace designed for structured product planning and team coordination.",
    fullDesc:
      "xSpaces is a web-based platform that enables teams to collaboratively manage product data in a flexible, spreadsheet-style environment. It supports structured workflows, grid-based editing, and custom views tailored to product planning needs. I contributed across both frontend and backend, working on interactive features, performance improvements, and overall application stability.",
    duration: "July 2024 - March 2025",
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
    duration: "April 2025 - Present",
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
];
