import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import laptopImg from "../Assets/about.png";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Techstack from "../components/Techstack";


function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            {/* about me */}
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am{" "}
                    <span className="purple">Meryeme Elhajouji </span>
                    from <span className="purple"> Laayoune, Morocco.</span>
                    <br />I am a junior developer.
                    <br />
                    <br />
                    My information !
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight />meryemelhajouji@gmail.com
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> https://github.com/meryemeelhajouji
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> https://www.linkedin.com/feed/
                    </li>
                  </ul>

                  <p style={{ color: "rgb(155 126 172)" }}>
                    {/* "Strive to build things that make a difference!"{" "} */}
                  </p>
                  {/* <footer className="blockquote-footer">Meryeme</footer> */}
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading text-center">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

      
      </Container>
    </Container>
  );
}

export default About;
