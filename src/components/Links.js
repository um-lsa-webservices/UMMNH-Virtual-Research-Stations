import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Links = ({ content }) => {
  return (
    <>
      <Row>
        <Col>
          <div className="gradient-bg pl-2 pt-2 pb-2 mt-3 line-below d-flex align-items-center">
            <img
              alt="university-logo-block-m"
              src="/images/blockM.png"
              height="100%"
              className="d-inline-block align-top nav-image"
            />
            <h2 className="ml-3 h3 mb-0">Explore more U-M research</h2>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-around mt-3">
        {content.links.map((item, index) => (
          <LinkItem key={index} item={item} index={index} />
        ))}
      </Row>
    </>
  );
};

const LinkItem = ({ item, index }) => {
  return (
    <Col xs={12} md={{ span: 3 }} className="mt-1 mb-1">
      <Card className="border-0" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
        <Card.Img src={item.image} alt={item.desc} />
        <Card.Body>
          <Button
            className="nav-button"
            onClick={() => window.open(item.destination, "_blank")}
          >
            {item.buttonText}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Links;
