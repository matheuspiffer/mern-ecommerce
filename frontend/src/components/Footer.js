import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text">Copyright &copy; ProSHop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
