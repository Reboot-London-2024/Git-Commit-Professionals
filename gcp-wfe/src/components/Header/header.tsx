import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./hStyle.css";
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
            <Nav.Link href="/receiveOffer" className="headerText">
              Receive Offer
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/preBoarding" className="headerText">
              Pre-Boarding
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/dayOne" className="headerText">
              Day One
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/firstNinetyDays" className="headerText">
              First Ninety Days
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/forum" className="headerText">
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
