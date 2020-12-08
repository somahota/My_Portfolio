import React from "react";
import Title from "../components/Title";
import IterativeAvatar from "../components/IterativeAvatar";
import skills from "../constants/badges";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import redesign from "../redesign.gif";

import { FaAngleDoubleLeft } from "react-icons/fa";
import { BsChevronDoubleLeft} from "react-icons/bs";

export default function Iterative() {
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
            <IterativeAvatar redesignClass="leftReDesign" />
          </div>
          <div className="col-lg">
            <Title title="Iterative Design" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
             
              <div className="mt-4">
          
                <br></br>
				
				 {" "}
                <a
                  href="https://ilk.io/"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  Ilk
                </a>  is a company that teams up 2-5 families into a pod and matches them with a caregiver to care for their kids. 

				<p></p>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Original Website </span> 
               
				<p> </p>
				 
				<p></p><p></p><p className="projSec"> <strong>  Context </strong></p> 
				<p className = "projAns"> We created an App for Ilk that could be downloaded from the website for interested users. The app goes through the matching process and provides a space for families and caregivers to communicate. </p>

                  
			   <p></p><p></p><p className="shiftSec"> <strong>  Design Iterations </strong></p> 
			   <p className = "projAns"> We tried different sketches for our low fidelity wireframes </p>
			   <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Sketch 1 <span className="highlight2">(Mobile view)</span> </span> 
				   <p className = "projAns"> Low fidelity sketch for the Login/Signup process and the dashboards. </p>
				   <p className = "projAns"> We tried 3 different sketches, playing around with different icons and layout, before finalizing this one. </p>

				<p></p>
			
				   
				  <p> </p><p className = "final-ans"> We then moved on to building our prototype using <span className="highlight2"> <strong> FIGMA </strong></span></p>
				  <p className = "projAns"> We received some interesting feedback from fellow designers which were as follows: </p>
				  <ul>
				  <li> <p className = "projAns"> The login page for parent and caregiver might confuse the users as they look the same. </p> </li>
				  <li> <p className = "projAns"> Make calendar text bigger. </p> </li>
				  <li> <p className = "projAns">Easier to scroll vertical vs horizontal. </p> </li>
				  </ul>
				  <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Prototype <span className="highlight2">(Mobile view)</span> </span> 
		
				<p></p><p></p><p className="shift_projSec"> <strong> User Testing </strong></p> 
							  <p className = "projAns"> We used a remote user testing service <a href="https://www.usertesting.com/"> UserTesting.com</a> to conduct our usability tests, where we were able to test with 3 users. The only user specification was that they needed to be a parent.

We wanted to focus on the sign up process as well as navigation, so we included a few different tasks. 
We were curious to see if users liked the app’s concept, mainly focusing on parents, and how intuitive they found the matching process and communicating with people in the app. 
 </p>
  <p className = "projAns"> One of the tasks was to <span className ="highlight1"> <strong> message a pod </strong> </span> </p>
  <p className = "projAns"> All 3 users were able to accomplish this task successfully, however, 1 user did point out that they are not sure 
  how to send the messages as we don’t have an ‘send’ icon to send a message. </p>
  <p className = "projAns"> <span className="highlight1">  <strong> As seen towards the end of the below demo, the user was satisfied with the design and functionalities of the prototype and suggested they would highly recommended this app to his friends. </strong> </span> </p>
  
  <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> User Testing <span className="highlight2">(Message a Pod)</span> </span> 
		<p> </p>
		<p className="final-ans"> Here is what our final protoype looks like. </p>
		<p> </p>
		<FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Final Prototype </span> 
		
				<p></p><p></p><p className="projSec"> <strong> Takeaways </strong></p> 		
			 <p className = "projAns"> This project was extremely rewarding and we all enjoyed testing the skills we learned in class. Our key takeaways were:	</p>
					<ul>
        <li><p className = "projAns"> During user testing, it became clear to us that users could benefit from “first time’ instructions about how to navigate in the app. 
          In the future, we would add pop ups for each button and include instructions about how the app works (with the option to “not view again”).
        </p> </li>
        <li> <p className = "projAns">
          Similarly, try to think as much as possible from the point of view of the User! Don’t assume anything - the issues user testing reveals are 
          really just assumptions we made about user knowledge.
        </p> </li>
        <li> <p className = "projAns">
          Planning interactions ahead of time using wireframes makes high-fi prototyping much simpler, especially when you end up having 65 frames.
        </p> </li>
      </ul>
					
			  </div>
	    
            </div>
					  
			</div>
        </div>
      </div>
    </header>
  );
}
