import React from "react";
import Header from "../../components/Header/header";
import "../PreBoarding/pbStyles.css";
import { Container, Row, Col } from "react-bootstrap";

function DayOne() {
  return (
    <div>
      <Header />
      <br />
      <div className="box">
        <Container>
          <Row>
            <Col className="heading">What to Expect</Col>
          </Row>
          <br />
          <Row>
            <Col className="text">Introduction to team</Col>
            <Col className="text">IT Setup</Col>
            <Col className="text">Begin mandatory training</Col>
          </Row>
          <br />
        </Container>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <div className="box2">
              <Container>
                <Row>
                  <Col className="heading">
                    Useful Webpages and Getting Help
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    <ul>
                      <li>IT Help Desk info</li>
                      <li>IT@LBG</li>
                      <li>New Starter Hub</li>
                      <li>Role/Team specific links</li>
                      <li>Condeco</li>
                    </ul>
                  </Col>
                </Row>
                <br />
              </Container>
            </div>
          </Col>
          <Col>
            <div className="box2">
              <Container>
                <Row>
                  <Col className="heading">
                    Plan for First Week
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Mandatory training with links to workday/Nerve centre
                    <br />
                    Basic plan supplied by line manager/lab
                  </Col>
                </Row>
                <br />
              </Container>
            </div>
          </Col>
          <Col>
            <div className="box2">
              <Container>
                <Row>
                  <Col className="heading">
                    Streamlining IT@LBG Tickets
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Guidance on how to use our script
                  </Col>
                </Row>
                <br />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DayOne;
