import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Backdrop,
  Fade,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/Project.scss";
import { projectsData } from "../constants/constant"; // move all project info here

interface ProjectType {
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  role: string;
  responsibilities: string[];
  learnings: string[];
}

const Project = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  const handleOpen = (project: ProjectType) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projectsData.map((proj, index) => (
          <Card
            key={index}
            className="project-card"
            onClick={() => handleOpen(proj)}
            style={{ margin: "1rem", cursor: "pointer" }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {proj.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {proj.shortDesc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box className="modal-box">
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>

            {activeProject && (
              <>
                <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                  <strong>{activeProject.title}</strong>
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Duration: </strong> {activeProject.duration}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Role: </strong> {activeProject.role}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  <strong>Description: </strong>
                  {activeProject.fullDesc}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  <strong>Responsibilities:</strong>
                </Typography>
                <ul>
                  {activeProject.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Typography variant="subtitle2">
                  <strong>Learnings:</strong>
                </Typography>
                <Typography component="ul" sx={{ pl: 2, mb: 1 }}>
                  {activeProject.responsibilities.map((item, idx) => (
                    <Typography
                      component="li"
                      key={idx}
                      sx={{
                        fontSize: "12px",
                        fontFamily: "inherit",
                        listStyle: "disc",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Project;
