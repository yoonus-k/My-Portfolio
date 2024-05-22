import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import { TbBrandMysql } from "react-icons/tb";
import { TbBrandLaravel } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";

import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <div>
      {/* Programming languages */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCsharp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading">
          <strong className="purple">Framworks </strong>
        </h1>
      </Row>
      
      {/* Framworks */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading">
          <strong className="purple">DB Managment </strong> Tools
        </h1>
      </Row>
      {/*DB */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOracle />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandMysql />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
