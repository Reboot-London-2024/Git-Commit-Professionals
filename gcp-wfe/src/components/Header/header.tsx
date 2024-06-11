import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Container className="header">
      <Row>
        <Col xs={6}>
          <Button
            href="/"
            className="bi bi-house-fill"
            size="lg"
            variant="light"
          />
        </Col>
        <Col xs={4}>
          <a href="/receiveOffer" className="text">
            Receive Offer
          </a>
          {"     "}
          <a href="/preBoarding" className="text">
            Pre-Boarding
          </a>
          {"     "}
          <a href="/dayOne" className="text">
            Day One
          </a>
          {"     "}
          <a href="/firstNinetyDays" className="text">
            First Ninety Days
          </a>
        </Col>
        <Col xs={2}>
          <Button variant="light">Log In</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
