import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Footer = ({ content }) => {
  if (content.credits && content.credits.length > 0) {
    return (
      <Row className="mt-3 mb-3">
        <Col xs={12} md={{ span: 6 }} className="mb-3">
          <a href="https://lsa.umich.edu/ummnh">
            <Image fluid alt="UMMNH Logo" src={'/images/ummnhLogo.png'} />
          </a>
        </Col>
        <Col xs={12} md={{ span: 6 }}>
          <a href={content.credits[0].link}>
            <Image fluid alt={content.credits[0].desc ? content.credits[0].desc : 'no alt text provided'} src={content.credits[0].image} />
          </a>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="mt-3 mb-3">
      <Col>
        <a href="https://lsa.umich.edu/ummnh">
          <Image fluid alt="UMMNH Logo" src={'/images/ummnhLogo.png'} />
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
