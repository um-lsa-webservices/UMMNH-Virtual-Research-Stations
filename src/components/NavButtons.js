import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const NavButtons = ({ currentSelection, setCurrentSelection, content }) => {
  const prevClick = () => {
    if (currentSelection > 0) {
      setCurrentSelection(currentSelection - 1);
    }
  };

  const nextClick = () => {
    if (currentSelection < content.main.length - 1) {
      setCurrentSelection(currentSelection + 1);
    }
  };

  if (currentSelection < 1) {
    return (
      <Row className="mt-auto mb-1">
        <Col xs={6}>
          <Button className="nav-button" onClick={nextClick}>
            Learn More &gt;
          </Button>
        </Col>
      </Row>
    );
  } else if (currentSelection === content.main.length - 1) {
    return (
      <Row className="mt-auto mb-1">
        <Col xs={6}>
          <Button className="nav-button" onClick={prevClick}>
            &lt; Go Back
          </Button>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="mt-auto mb-1">
      <Col xs={6}>
        <Button className="nav-button" onClick={prevClick}>
          &lt; Go Back
        </Button>
      </Col>
      <Col xs={6}>
        <Button className="nav-button" onClick={nextClick}>
          Learn More &gt;
        </Button>
      </Col>
    </Row>
  );
};

export default NavButtons;
