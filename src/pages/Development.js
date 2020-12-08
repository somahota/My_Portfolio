import React from "react";
import Title from "../components/Title";
import DevelopmentAvator from "../components/DevelopmentAvator";
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

export default function Development() {
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
            <DevelopmentAvator developClass="leftDevelop" />
          </div>
          <div className="col-lg">
            <Title title="Website Development" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
             
              <div className="mt-4">
          
                <br></br>
				
				An online grocery shopping store that considers your essential dietary needs and facilitates a quick shopping experience.   
				<p> </p>

			   <p></p><p></p><p className="projSec"> <strong>  Research </strong></p> 
			  
				<p className = "projAns"> I then checked what two of the most popular online grocery stores offer.</p>
				<p></p>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Instacart </span> 
				   <ul>
				    <li><p className = "projAns">Instantly add products to the cart without routing to a different page. </p></li>
					<li> <p className = "projAns">You can increment or decrement on the product card itself.</p></li>
					<li> <p className = "projAns">You can filter through different categories like Pantry,Breakfast,Bakery ,etc. and sub-categories like Bread,Tortillas,Buns ,etc.</p></li>
					</ul>
					<p></p> 
					<p className="shift">
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Whole Foods </span> </p>
				   <ul>
				    <li><p className = "projAns">Similar to Instacart in terms of filtering through different categories and sub-categories.</p></li>
					<li> <p className = "projAns">Add to Cart feature is not very direct. You have to first click on the product item which navigates you to the product page where you can add to cart and then return back to the previous page by hitting the 'Back' button.</p></li>
					</ul>
					<p className = "projAns"> Neither of these websites offer the feature to let health conscious users select specific food items based on their nutrition diet. Also,I liked Instacart usability better than Whole Foods as users would generally prefer having the option of instantly adding to cart.</p>
					<p className = "projAns"> My goal is to build an online grocery store that facilitates quick shopping targetting users diet needs. </p>
			  
			  <p></p><p></p><p className="projSec"> <strong>  Design Iterations </strong></p> 
			   <p className = "projAns"> I designed my website in such a way that it lets users filter through their specific diet needs and makes the overall shopping process quick and efficient.</p>
				<p></p>
				<p className = "projAns"> I added the following features: </p>
				<ul>
				<li> <p className = "projAns"> The filters are clearly labeled so the users can easily understand their functionality and select items as per their dietary needs.</p></li>
				<li> <p className = "projAns"> The sort feature helps users filter products based on their price needs. </p> </li>
				<li> <p className = "projAns"> The product card lets the user increment/decrement items and add them on cart right on the spot instead of having them navigate elsewhere.</p> </li>
				<li> <p className = "projAns"> User can reset all their filters with the reset button </p></li>
				<li> <p className = "projAns"> Each time a product is added to the cart, the 'Add to Cart' button changes color and the 'Cart' button buzzes. This is to notify the user that their cart has been updated. </p></li>
				</ul>
				 <FaAngleDoubleLeft
                    style={{ color: "#2caeba" }}
                  ></FaAngleDoubleLeft>
                   <span className = "arrow_caption"> Final Website </span> 
			  </div>
	    
            </div>
					  
			</div>
        </div>
      </div>
    </header>
  );
}
