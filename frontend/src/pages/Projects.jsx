import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import { getAllProjects } from "../utils/requests";
import image from  "../Assets/about.png";


function Projects() {
  const [Project, setProject] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProjects()
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Project </strong>
        </h1>
        <p className="text-white text-center">
          This is the projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {Project.map((Project) => (
          <Col md={4} className="project-card">
              <ProjectCard
               image={image}
               title={Project.name}
               description={Project.description}
               demoLink={Project.link}


                />  
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
