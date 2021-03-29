import React from "react";
import { Col, Row } from "react-bootstrap";
import Paragraphs from "./Paragraphs";
import NavButtons from "./NavButtons";

const TextComponent = ({ currentSelection, setCurrentSelection, content }) => {
  if (content.main[currentSelection]) {
    return (
      <Col lg={5} className="d-flex flex-column mt-2">
        {/* Section Title */}
        <Row>
          <Col>
            <h3 className="section-header">
              {content.main[currentSelection].title}
            </h3>
          </Col>
        </Row>

        {/* Section Text */}
        <Row>
          <Col>
            <div className="custom-text-body">
              <Paragraphs textToSplit={content.main[currentSelection].text} />
            </div>
          </Col>
        </Row>

        {/* Nav Buttons */}
        <NavButtons
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          content={content}
        />
      </Col>
    );
  }
  return (
    <div>
      <h1>No content to display for this selection</h1>
    </div>
  );
};

export default TextComponent;
