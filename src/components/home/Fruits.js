import { Row, Col } from "antd";
import React from "react";
import { Card } from "antd";

import image1 from '../../assets/images/orange.jpg';
import image2 from '../../assets/images/lemons.jpg';
import image3 from '../../assets/images/grapefruit.jpg';


const { Meta } = Card;

function Fruits() {
  return (
    <div id="fruits" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Our Fruits</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="orange" src={image1} />}
            >
              <Meta title="Orange" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="lemons" src={image2} />}
            >
              <Meta title="Lemons" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="grapefruit" src={image3} />}
            >
              <Meta title="GrapeFruit" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Fruits;
