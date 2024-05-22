import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
            <span className="purple"> Yoonus Kizhakkethil is a full-stack developer</span> with experience in Java, JavaScript, Python, React, Next.js, Firebase, and Liquid files. 
            <br />
            <br />
            Passionate about creating user-friendly web applications, Yoonus brings a wealth of technical expertise to every project.
            <br />
             You can find more about me on my <a className="purple" href="https://www.linkedin.com/in/yoonus-k/">Linkedin profile</a>  page
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things everyday
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep It Simple"{" "}
          </p>
          <footer className="blockquote-footer">Yoonus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
