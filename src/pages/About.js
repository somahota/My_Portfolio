import React from "react";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import skills from "../constants/badges";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return ( 
  
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div className="pt-5 m-auto row">
          <div className="col-lg">
            <Avatar avatarClass="leftAvatar" />
          </div>
          <div className="col-lg">
            <Title title="About Me" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
              <i> Always be curious about what and why.</i>
              <div className="mt-4">
                <strong>Nerd Queen,</strong> Software Developer from{" "}
                <a
                  href="https://en.wikipedia.org/wiki/California"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  California
                </a>
                , United States.
                <br></br>I am a passionate developer, with a Full Stack Developer experience. I love coding, especially in{" "}
                <a
                  href="https://www.java.com/en/"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  Java
                </a>
                . I am passionate about photography and food.
              </div>
              <div className="pt-4">
                {skills.map((skillBadge, index) => (
                  <span className="badge badgeSkills" key={index}>
                    {skillBadge.text}
                  </span>
                ))}
              </div>
              <Nav className="mt-4">
                <Nav.Link
                  as={Link}
                  to="/experience"
                  className="badge badgeSkills mt-4"
                  style={{
					  background: "#9DAAF2",
                    color: "#1A2238",
                    textAlign: "center",
					marginBottom:"20px"
                  }}
                >
                  Click here to check out my resume
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
