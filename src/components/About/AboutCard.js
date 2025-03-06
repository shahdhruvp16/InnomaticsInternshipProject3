import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shah Dhruv </span>
            from <span className="purple"> Vadodara, Gujarat, India.</span>
            <br />
            I am currently Full-Stack Web Devloper at Innomatics.
            <br />
            I am pursuing my B.Tech from ITM (SLS) BARODA UNIVERSITY
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Open-MIC (Stand-Up Comedy)
            </li>
            <li className="about-activity">
              <ImPointRight /> Poetry
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dhruv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
