import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ButtonStack = ({ currentSelection, setCurrentSelection, content }) => {
  return (
    <Row>
      <Col xs={12}>
        <hr />
        <h3 className="section-header pt-2 mt-2">Sections</h3>
      </Col>
      {content.main.map((item, index) => (
        <Col xs={12} lg={3} key={index} className="mb-1 mt-1">
          <Button
            className="nav-button"
            onClick={() => setCurrentSelection(index)}
            active={index === currentSelection ? true : false}
          >
            {item.title}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default ButtonStack;
