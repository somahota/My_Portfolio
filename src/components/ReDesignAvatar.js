import { Container, Row, Col, Image } from "react-bootstrap";
import redesign from "../redesign.gif";
import orig from "../orig_website.gif";
import orig_faults from "../orig_website_faults.png";
import desktop from "../desktop1.PNG";
import wave from "../my_wave.PNG";

export default function ReDesignAvatar({ redesignClass }) {
  return (
    <Container>
      <Row className={redesignClass || "redesign"}>
        <Col xs={12} sm={4} md={4} b>
		<Image src={orig} className="avatar-redesign"/>
        </Col>
      </Row>
	  <Row className={redesignClass || "redesign"}>
        <Col xs={12} sm={4} md={4} b>
          <Image src={orig_faults} className="avatar-redesign" />
        </Col>
      </Row>
	  <Row className={redesignClass || "redesign"}>
        <Col xs={12} sm={4} md={4} b>
          <Image src={desktop} className="avatar-redesign" />
        </Col>
      </Row>
	  <Row className={redesignClass || "redesign"}>
        <Col xs={12} sm={4} md={4} b>
          <Image src={redesign} className="avatar-redesign" />
        </Col>
      </Row>
    </Container>
  );
}
