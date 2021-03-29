// Do not make changes here.
// To create new stations or edit, modify content.js

import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import ExtraContentItem from "./components/ExtraContentItem";
import Footer from "./components/Footer";
import VideoComponent from "./components/VideoComponent";
import TextComponent from "./components/TextComponent";
import ButtonStack from "./components/ButtonStack";
// import Links from "./components/Links";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import content from "./content.js";

export default function App() {
  const [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            {/* Header */}
            <Header title={content.page.title} />

            {/* Main Content */}
            <Row className="mt-2">
              <MainContent
                currentSelection={currentSelection}
                setCurrentSelection={setCurrentSelection}
              />
            </Row>

            {/* Button Stack */}
            <ButtonStack
              currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}
              content={content}
            />

            {/* Extra Content */}
            <ExtraContent />

            {/* Links */}
            {/* <Links content={content} /> */}

            <hr />
            {/* Footer */}
            <Footer content={content} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const MainContent = ({ currentSelection, setCurrentSelection }) => {
  return (
    <Col xs={12}>
      <Row className="mb-2">
        {/* Left Pane */}
        <Col lg={7}>
          <VideoComponent index={currentSelection} content={content} />
        </Col>

        {/* Right Pane */}
        <TextComponent
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          content={content}
        />
      </Row>
    </Col>
  );
};

const ExtraContent = () => {
  return (
    <div>
      {content.secondary.map((item, index) => (
        <ExtraContentItem key={item.title} item={item} index={index} />
      ))}
    </div>
  );
};
