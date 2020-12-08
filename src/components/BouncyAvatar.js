import { Container, Row, Col, Image } from "react-bootstrap";
import bouncy from "../bouncy.gif";
import bouncy_class from "../bouncy_class.png";
import uml from "../uml.png";
import program from "../program.png";

export default function BouncyAvatar({ bouncyClass }) {
  return (
    <Container>
      <Row className={bouncyClass || "bouncy"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={bouncy} className="avatar-redesign" />
        </Col>
      </Row>
	  <Row className={bouncyClass || "bouncy"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={bouncy_class} className="avatar-bouncy" />
        </Col>
      </Row>
	  <Row className={bouncyClass || "bouncy"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={uml} className="avatar-redesign" />
        </Col>
      </Row>
 <Row className={bouncyClass || "bouncy"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={program} className="avatar-redesign" />
        </Col>
      </Row>	  
    </Container>
  );
}
