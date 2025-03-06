import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Game from "../../Assets/Projects/Game.png";
import Churn from "../../Assets/Projects/Churn.png";
import Coffee from "../../Assets/Projects/Coffee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Mind Game"
              description="🎮 Memory Card Game A fun and interactive memory matching game built with HTML, CSS, and JavaScript. Test your memory skills by matching pairs while racing against the clock! ⏳🔥"
              ghLink="https://github.com/shahdhruvp16/InnomaticsInternshipProject2"
              demoLink="https://innomatics-internship-project2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coffee}
              isBlog={false}
              title="Brewed Awakening"
              description="Welcome to Brewed Awakening, a beautifully designed and responsive coffee shop website created during my internship training program at Innomatics Research Lab."
              ghLink="https://github.com/shahdhruvp16/InnomaticsInternshipTask2"
              demoLink="https://innomatics-internship-task2-ruddy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Churn}
              isBlog={false}
              title="Customer Churn Prediction"
              description="This website features a dark theme with a moving gradient background, creating a sleek and modern look. It provides an interactive interface to predict customer churn using machine learning models like Logistic Regression, Random Forest, and Gradient Boosting. Users can upload data, visualize results, and analyze key insights dynamically. 🚀"
              ghLink="https://github.com/shahdhruvp16/CodeSoft-ML-/blob/main/Costumer_Churn_Prediction.zip"
              demoLink="https://github.com/shahdhruvp16/CodeSoft-ML-/blob/main/Costumer_Churn_Prediction.zip"              
            />
          </Col>        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
