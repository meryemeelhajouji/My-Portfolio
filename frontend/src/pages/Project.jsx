import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import img from "../Assets/home-bg.jpg";


function Project() {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* <p className="text-white text-center">
          This is the projects that I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <Card className="project-card-view">
            <h1 className="project-heading text-center">Mini Blog</h1>
              <Card.Img
                variant="top"
                src={img}
                alt="card-img"
              />
              <Card.Body>
               
                <h1 className="project-heading  text-center">
                About this <strong className="purple">project </strong>
                 </h1>
                <Card.Text style={{ textAlign: "justify" }}>
                  Personal Chat Room or Workspace to share resources and hangout
                  with friends build with react.js, Material-UI, and Firebase.
                  Have features which allows user for realtime messaging, image
                  sharing as well as supports reactions on messages.
                  Personal Chat Room or Workspace to share resources and hangout
                  with friends build with react.js, Material-UI, and Firebase.
                  Have features which allows user for realtime messaging, image
                  sharing as well as supports reactions on messages.
                </Card.Text>

                <h1 className="project-heading  text-center">
                    thecnologiy <strong className="purple">Works </strong>
                 </h1>
                 
                 <ul >
                    <li>NodeJs</li>
                    <li>React</li>
                    <li> MySql</li>
                    <li>Docker</li>
                 </ul>
                
                <Button variant="primary" href="{props.ghLink}" target="_blank">
                  <BsGithub /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
