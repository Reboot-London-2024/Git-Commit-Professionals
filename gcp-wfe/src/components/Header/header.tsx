import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Button variant="light" className="bi bi-house-fill" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/receiveOffer" className="text">
              Receive Offer
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/preBoarding" className="text">
              Pre-Boarding
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/dayOne" className="text">
              Day One
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/firstNinetyDays" className="text">
              First Ninety Days
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/forum" className="text">
              New Joiner Forum
            </Nav.Link>
          </Nav>
          <Button variant="light">Log In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
