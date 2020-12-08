import { Container, Row, Col, Image } from "react-bootstrap";
import react from "../react.gif";
import ilk from "../ilk.PNG";
import usertest from "../iter_usertesting.gif";
import hifi from "../hifi_eg.PNG";
import design1 from "../iter_design1.jpg";
import design2 from "../iter_design1.jpg";
import iterative from "../iterative.gif";

export default function IterativeAvatar({ iterativeClass }) {
  return (
    <Container>
      <Row className={iterativeClass || "iterative"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={ilk} className="avatar-redesign" />
        </Col>
      </Row>
	  <Row className={iterativeClass || "iterative"}>
        <Col xs={12} sm={4} md={4} b>
   		<Image src={design1} className="avatar-redesign" />
        </Col>
      </Row>

	  <Row className={iterativeClass || "iterative"}>
        <Col xs={12} sm={4} md={4} b>
   		<Image src={hifi} className="iter_hifi" />
        </Col>
      </Row>
	  <Row className={iterativeClass || "iterative"}>
        <Col xs={12} sm={4} md={4} b>
           <Image src={usertest} className="iter_proto" />
        </Col>
      </Row>
	<Row className={iterativeClass || "iterative"}>
        <Col xs={12} sm={4} md={4} b>
           <Image src={iterative} className="iter_proto" />
        </Col>
      </Row>
    </Container>
  );
}
