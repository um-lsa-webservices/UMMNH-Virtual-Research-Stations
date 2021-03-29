import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import Paragraphs from "./Paragraphs";

const ExtraContentItem = ({ item, index }) => {
  // Alternate side that picture is on (if picture exists for item)
  const imagePlacement = index % 2 === 0 ? "first" : "last";

  if (item.image && item.image.source) {
    // This extra content item has an image with a link
    const imageDescription = item.image.desc
      ? item.image.desc
      : "no image description provided";
    const imageCaption = item.image.caption ? item.image.caption : "";

    return (
      <Row>
        <Col>
          <hr />
          <Row>
            <Col xs={12} lg={{ span: 7, order: imagePlacement }}>
              <Row>
                <Col>
                  <h3 className="section-header">{item.title}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="custom-text-body">
                    <Paragraphs textToSplit={item.text} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={{ span: 5 }}>
              <Row>
                <Col>
                  <Image
                    alt={imageDescription}
                    src={item.image.source}
                    fluid
                    className="extra-content-image"
                  />
                  <div className="subtitle mt-3">
                    <Paragraphs textToSplit={imageCaption} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  } else {
    // This extra content item has no image
    return (
      <Row>
        <Col>
          <hr />
          <Row>
            <Col>
              <h3 className="section-header">{item.title}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="custom-text-body">
                <Paragraphs textToSplit={item.text} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
};

export default ExtraContentItem;
