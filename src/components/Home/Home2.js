import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";


function Home2() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Container fluid className="home-about-section" id="about">
      <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
      <Container>
        <Row>
          <Col md={12} className="home-about-description ">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Motivated CS student at KAU University with a passion for
              user-friendly design a cutting-edge technology.
              <br />
              <br />I balance academic studies with real-world projects,
              exploring technologies like
              <i>
                <b className="purple"> React, Next.js, and Django.</b>
              </i>
              <br />
              <br />
              Each summer, I create e-commerce stores to learn about
              <i>
                <b className="purple"> business and marketing.</b>
              </i>
              <br />
              <br />
              💎 Goal:
              <i>
                <b className="purple">
                  {" "}
                  Stay updated with new technologies and provide professional
                  services.
                </b>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" , marginbottom : "2rem"}}>My Recent Works</h1>
           
          </Col>
          <Col md={12} className="home-about-social">
            
            <Button variant="primary" href="/project">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ fontSize: "1.5em" }}
              >
                See My Projects
              </Nav.Link>
            </Nav.Item>
          
        </Button>
          </Col>
          
        </Row>
      </Container>
     
    </Container>
  );
}
export default Home2;
