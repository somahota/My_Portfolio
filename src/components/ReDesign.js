import { Container, Row, Col, Image } from "react-bootstrap";
import redesign from "../redesign.gif";

export default function Avatar({ avatarClass }) {
  return (
    <Container>
      <Row className={avatarClass || "redesign"}>
        <Col xs={12} sm={4} md={4} b>
          <Image src={redesign} className="avatar-redesign" />
        </Col>
      </Row>
    </Container>
  );
}
