import React from "react";
import Header from "../../components/Header/header";
import "./pbStyles.css";
import { Container, Row, Col } from "react-bootstrap";

function PreBoarding() {
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
            <Col className="text">Agree start date</Col>
            <Col className="text">Complete learning on LBG vision</Col>
            <Col className="text">Complete pre-boarding activities</Col>
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
                    Breaking Down Pre-Boarding Activities
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Confirm personal details, bank details, etc.
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
                  <Col className="heading">Your Office</Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Address
                    <br />
                    Facilities
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
                  <Col className="heading">Team</Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Your business area is ...
                    <br />
                    Your platform is...
                    <br />
                    Your lab is ...
                    <br />
                    Link to structure chart
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

export default PreBoarding;
