import React from "react";
import Header from "../../components/Header/header";
import "../PreBoarding/pbStyles.css";
import { Container, Row, Col } from "react-bootstrap";

function FirstNinetyDays() {
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
            <Col className="text">Understanding team, department and role</Col>
            <Col className="text">Get involved in the Lloyds community</Col>
            <Col className="text">
              Complete mandatory training and additional learning for role
            </Col>
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
                  <Col className="heading">Get Involved</Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Links to info about each of the different networks
                    <br />
                    Details about charity & volunteering
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
                  <Col className="heading">Make the Most of Your Rewards</Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">
                    Workday rewards dashboard Links to Life@LBG Guidance on how
                    to book holidays etc.
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
                  <Col className="heading">Streamlining IT@LBG Tickets</Col>
                </Row>
                <br />
                <Row>
                  <Col className="text">Guidance on how to use our script</Col>
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

export default FirstNinetyDays;

