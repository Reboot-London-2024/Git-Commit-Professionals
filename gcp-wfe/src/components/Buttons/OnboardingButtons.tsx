import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Buttons.css";

function OnboardingButtons() {
  return (
    <ButtonGroup size="lg" className="onboardingButtons">
      <Button href="/receiveOffer" variant="secondary" className="btn1">
        Receive Offer & Complete Background Checks
      </Button>
      <Button href="/preBoarding" variant="secondary" className="btn2">
        Pre-Boarding
      </Button>
      <Button href="/dayOne" variant="success" className="btn3">
        Day One
      </Button>
      <Button
        href="/firstNinetyDays"
        variant="outline-secondary"
        className="btn4"
      >
        First Ninety Days
      </Button>
    </ButtonGroup>
  );
}
export default OnboardingButtons;