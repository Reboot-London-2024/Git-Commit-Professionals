import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Buttons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function HelpButtons() {
  return (
    <>
      <ButtonGroup size="lg" className="helpButtons">
        <Button variant="light" className="helpBtn"><i className="bi bi-people-fill"></i>
         Ask a Question
        </Button>
        <Button variant="light" className="helpBtn"><i className="bi bi-people-fill"></i>
         Colleague Contacts
        </Button>
        <Button variant="light" className="helpBtn"><i className="bi bi-blockquote-left"></i>
          Translate Page
        </Button>
      </ButtonGroup>
    </>
  );
}
export default HelpButtons;