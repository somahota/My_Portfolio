import { Container, Row, Col, Image } from "react-bootstrap";
import react from "../react.gif";
import instacart from "../instacart.PNG";
import whole_foods from "../whole_foods.PNG";

export default function DevelopmentAvatar({ developClass }) {
  return (
    <Container>
      <Row className={developClass || "development"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={instacart} className="insta_food" />
        </Col>
      </Row>
	  <Row className={developClass || "development"}>
        <Col xs={12} sm={4} md={4} b>
   		<Image src={whole_foods} className="whole_food" />
        </Col>
      </Row>
	  
	  <Row className={developClass || "development"}>
        <Col xs={12} sm={4} md={4} b>
           <Image src={react} className="web_develop" />
        </Col>
      </Row>

    </Container>
  );
}
