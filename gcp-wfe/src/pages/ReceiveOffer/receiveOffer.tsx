import React from "react";
import Header from "../../components/Header/header";
import "../PreBoarding/pbStyles.css";
import { Container, Row, Col } from "react-bootstrap";

function ReceiveOffer() {
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
            <Col className="text">Receive and discuss offer</Col>
            <Col className="text">
              Upload required pre-employment vetting documents to First
              Advantage
            </Col>
            <Col className="text">
              Completion of background checks and confirmation of role
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <div className="box">
              <Container>
                <Row>
                  <Col className="heading">
                    Breaking Down the Background Check
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    <ol>
                      <li>Provide right to work documents</li>
                      <li>Proof of address</li>
                      <li>Full legal name and date of birth</li>
                      <li>National Insurance number</li>
                      <li>Five year work or study history</li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col className="text">
                    Aim to complete stage within 3 to 4 weeks
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

export default ReceiveOffer;
