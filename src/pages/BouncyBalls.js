import React from "react";
import Title from "../components/Title";
import BouncyAvatar from "../components/BouncyAvatar";
import skills from "../constants/badges";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";


import { FaAngleDoubleLeft } from "react-icons/fa";
import { BsChevronDoubleLeft} from "react-icons/bs";

export default function BouncyBalls() {
  return (
    <header className="pt-5 mt0" style={{ height: "20vh" }}>
					<Nav.Link
                  as={Link}
                  to="/projects"
                  style={{
                    color: "#1A2238",
                  }}
                > <span className="arrow_caption"> Back </span></Nav.Link> 
           
               
      <div className="redesign-container">
        <div className="pt-5 m-auto row">
          <div className="col-lg-redesign">
            <BouncyAvatar bouncyClass="leftReDesign" />
          </div>
          <div className="col-lg">
            <Title title="Bouncy Balls" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
             
              <div className="mt-4">
          
                <br></br>
				
				 An application that generates and displays a set of balls that bounce around in a window in an entertaining way that the user can control.
				<p></p>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Bouncy Balls game </span> 
               
				<p> </p>
				 
				<p></p><p></p><p className="projSec_top"> <strong>  Context </strong></p> 
				<p className = "projAns"> To create the Bouncy Balls application that generates and displays a few differently colored balls on the screen, which will bounce as if they are under the
				influence of gravitational force. To produce an interesting pattern, the rate of fall is set differently across the balls. The balls follow the equations of motion and
				accelerate the longer they fall and decelerate as they climb back up. Additionally, the bouncing balls may bump into each other or into the wall. The user may use
				the arrow keys to increase or decrease the speed/number of balls at which the animation runs and may move a ball around. </p>

                <p></p><p></p><p className="projSec_top"> <strong>  Intended Audience </strong></p> 
                <p className = "projAns">Developers/Programmers who want to be entertained while compiling their program. </p>
			   <p></p><p></p><p className="projSec_top"> <strong>  Design Decisions </strong></p> 
			   <p className = "projAns"> To build this application, we are going to need: </p>
				<ul>
				<li><p className = "projAns">A way to decide when to start the game. </p> </li>
				<li><p className = "projAns">A way of representing the balls and the way that the balls fall. </p> </li>
				<li><p className = "projAns">A way of controlling the count and speed of the balls. </p> </li>
				</ul>
			   <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Class diagram </span> 
				   <p> </p>
				   
				  <p> </p><p className = "projSec-final"> <strong> User Specification </strong></p>
				  <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> User interaction with System <span className="highlight2">(UML) </span> </span> 
				
					<p> </p><p className = "projSec-final"> </p>
				  <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> What the program does</span> 
			  </div>
	    
            </div>
					  
			</div>
        </div>
      </div>
    </header>
  );
}
