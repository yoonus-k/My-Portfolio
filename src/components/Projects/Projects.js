import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Chess from "../../Assets/Projects/Chess.png";
import Store from "../../Assets/Projects/Store.png";
import Inventory from "../../Assets/Projects/Inventory.png";
import Reg from "../../Assets/Projects/Reg.png";
import Real from "../../Assets/Projects/Real.png";

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
              imgPath={Inventory}
              isBlog={false}
              title="Inventory Management System"
              description="Developed using AppSheet and Google Sheets for database integration, this inventory management application also leverages AWS services and integrates seamlessly with Oxo database. Designed for Starbucks branches, it provides real-time stock levels, calculates daily variances, monitors expiry dates, and supports API integration for enhanced functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Real}
              isBlog={false}
              title="Real-Estate"
              description="Built with Next.js, PostgreSQL, React, and Tailwind CSS, this full-stack real estate application facilitates property buying and selling. It supports payment options and allows users to register as buyers, sellers, or brokers, providing a comprehensive platform for real estate transactions."
              ghLink="https://github.com/yoonus-k/cpcs_241_db"
              demoLink="https://cpcs-241-db.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Store}
              isBlog={false}
              title="Gym Bro - Ecommerce"
              description="This custom-developed e-commerce website, created using Shopify's Liquid themes, boasts a premium design and has generated over $1 million in revenue. It offers a seamless shopping experience tailored to fitness enthusiasts."
              ghLink="https://github.com/yoonus-k/Debutify_theme_Gym_Bro"
              demoLink="https://www.gymbromixer.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A visually appealing portfolio website developed with React.js and Bootstrap, deployed on Vercel. It showcases a modern UI design, highlighting personal projects and achievements effectively."
              ghLink="https://github.com/yoonus-k/My-Portfolio"
              demoLink="https://yoonus.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reg}
              isBlog={false}
              title="Registration System"
              description="Created to streamline course registration during high traffic times, this Chrome extension was built using JavaScript and Bootstrap. It uses Chrome's messaging technology between the browser and background scripts, allowing users to save course numbers and automate registration at specified times."
              ghLink="https://github.com/yoonus-k/Odus_Reg"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              title="AI Chess"
              description="Developed in Python, this Chess AI utilizes an enhanced alpha-beta pruning algorithm. Users can set the algorithm's depth and choose between manual or AI mode, providing a challenging and customizable chess experience."
              ghLink="https://github.com/yoonus-k/Chess_AI_Python"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
