import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Row>
      <Col>
        <div className="gradient-bg pl-2 pt-2 pb-2 line-below d-flex align-items-center">
          <img
            alt="university-logo-block-m"
            src="/images/blockM.png"
            height="100%"
            className="d-inline-block align-top nav-image"
          />
          <h1 className="ml-3 h2 mb-0">{title}</h1>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
