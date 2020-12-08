import React from "react";
import Title from "../components/Title";
import ReDesignAvatar from "../components/ReDesignAvatar";
import skills from "../constants/badges";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import redesign from "../redesign.gif";
import orig from "../orig_website.gif";
import orig_faults from "../orig_website_faults.png";
import wave from "../my_wave.PNG";
import summary from "../summary.PNG";
import desktop from "../desktop1.PNG";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { BsChevronDoubleLeft} from "react-icons/bs";

export default function ReDesign() {
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
            <ReDesignAvatar redesignClass="leftReDesign" />
          </div>
          <div className="col-lg">
            <Title title="Website Re-Design" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
             
              <div className="mt-4">
          
                <br></br>
				
				A "responsive redesign" focussed on cleaning and revamping the {" "}
                <a
                  href="https://www.gatesnfences.com"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  gatesnfences
                </a> website to improve user usability.
				<p></p>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Original Website </span> 
               
				<p> </p>
				 
				<p></p><p></p><p className="projSec"> <strong>  Problem </strong></p> 
				<p className = "projAns"> This site is for users to buy different types of gates or fences for their needs. The original site has a large range of items available, however, there are some critical issues with the website design and my aim is to redesign the website fixing those issues. </p>

			   <p></p><p></p><p className="projSec"> <strong>  Research </strong></p> 
			   <p className = "projAns"> I conducted <span className = "highlight1"> <strong> accessibility-checking </strong> </span> using the <span className="highlight2"> <strong> WAVE service tool </strong></span> and the result is shown below. </p>
				<Image src={summary} className="projAnsImage"/>
				<p></p>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Usability issues </span> 
               
			   <p></p><p></p><p className="projSec"> <strong>  Design Iterations </strong></p> 
			   <p className = "projAns"> I built <span className = "highlight1"> <strong> low-fidelity wireframes </strong> </span> using <span className="highlight2"> <strong> Balsamiq </strong></span> for all 3 views - desktop, mobile, and tablet </p>
			
				<p></p>
				<p className = "projAns"> I made the following changes: </p>
				<ul>
				<li> <p className = "projAns"> Improved the color contrast of the entire website by choosing strong contrasting colors between the background and text. </p></li>
				<li> <p className = "projAns"> Structured the product categories (gates,fences,railings) into dropdown buttons displaying their sub-categories.</p></li>
				<li> <p className = "projAns"> Added breadcrumb to provide convenient navigation tool for the users.</p></li>
				<li> <p className = "projAns"> Eliminated the text block and displayed only the relevant info. </p> </li>
				
				</ul>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Lo-Fidelity wireframe <span className="highlight2">(Desktop view)</span> </span> 
				   
				  <p> </p><p className = "final-ans"> I then redesigned the website using Bootstrap. </p>
				  <p className = "projAns"> Bootstrap is a very popular HTML, CSS, and JavaScript library that is used to build responsive websites. </p>
				  <p className = "projAns"> I used Bootstrap because I want users to have a convenient experience browsing the website on any device they choose.</p>
				  <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Final Re-Designed Website <span className="highlight2">(Desktop view)</span> </span> 
		
				<p></p><p></p><p className="projSec"> <strong> Takeaways </strong></p> 
							  <p className = "projAns"> I learned the use of the WAVE tool to check website accessibility which in turn helped me focus on the key issues associated 
								with the website. </p>
								<p className = "projAns"> I then redesigned the website working on eliminating those errors.</p>
								<p className = "projAns"> I rechecked my redesigned website on the WAVE tool to ensure that the number of errors have reduced to a significant extent. </p>
							  
			  </div>
	    
            </div>
					  
			</div>
        </div>
      </div>
    </header>
  );
}
