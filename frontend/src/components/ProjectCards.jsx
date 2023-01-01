import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

function ProjectCards(Project) {

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src= {Project.image} alt="card-img" />
      <Card.Body>
        <Card.Title>{Project.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {Project.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {!Project.isBlog && Project.demoLink && (
          <Button
            variant="primary"
            href={Project.demoLink}
            target="_blank"
            style={{ marginLeft: "10px"}} >
            <CgWebsite /> &nbsp;
            {"Read More"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
