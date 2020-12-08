import React from "react";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import pageLinks from "../constants/pageLinks";
import projLinks from "../constants/projLinks";

export default function Cards({ cardItems }) {
  return (
    <>
      {cardItems.map((cardItem) => (
        <Card
          className="d-inline-flex shadow p-3 mb-5 bg-white rounded zoom"
          style={{
            width: "20rem",
            marginRight: "25px"
          }}
          key={cardItem.id}
        >
          <Card.Img variant="top" src={cardItem.cardItemImage} />
          <Card.Body>
            <Card.Title>{cardItem.cardItemTitle}</Card.Title>
            <Card.Text>{cardItem.cardItemContent}</Card.Text>
            {cardItem.buttons && Array.isArray(cardItem.buttons) ? (
              cardItem.buttons.map((button, index) => (
                <span className="badge badgeSkills" key={index}>
                  {button}
                </span>
              ))
            ) : (
              <>
              </>
            )}
			 <Card.Text><span className="cardDate"><strong>{cardItem.cardItemDate}</strong></span></Card.Text>
			 <Card.Text><span className="cardDate">{cardItem.item} </span></Card.Text>
			 
          </Card.Body>
          {cardItem && cardItem.cardItemFooterUrl ? (
            <Card.Footer>
			 <Nav className="mt-4">
            {projLinks.map((link) => (
              <Nav.Link as={Link} to={link.url}
			  
                  className="badge badgeSkills mt-4"
                  style={{
					  background: "#9DAAF2",
                    color: "#1A2238",
                    textAlign: "center"
				  }}
				  >
                {link.text}
              </Nav.Link>
            
          ))}
        </Nav>
                
               
            </Card.Footer>
          ) : null}
        </Card>
      ))}
    </>
  );
}
