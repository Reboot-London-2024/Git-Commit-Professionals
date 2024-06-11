import React from "react";
import Header from "../../components/Header/header";
import HelpButtons from "../../components/Buttons/HelpButtons";
import OnboardingButtons from "../../components/Buttons/OnboardingButtons";
import { Row } from "react-bootstrap";
import "../../App.css";

function LandingPage() {
  return (
    <div>
      <Header />
      <p className="subHeader">
        Congratulations on joining Lloyds Banking Group!
      </p>
      <p className="paragraph">
        The bar below details the stages involved in onboarding to LBG. Click on
        each stage to find out more about what it involves. Your current stage
        will be highlighted in red, with completed stages turning green.
        Additional information will appear in each stage as you progress through
        your onboarding journey.
      </p>
      <Row>
        <OnboardingButtons />
      </Row>
      <br />
      <Row>
        <HelpButtons />
      </Row>
    </div>
  );
}

export default LandingPage;
