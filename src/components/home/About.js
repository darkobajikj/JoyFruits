import React from "react";
import { Row, Col } from "antd";
import aboufruits from "../../assets/images/aboufruits.jpg";

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <Row gutter={[48, 8]}>
          <Col md={{ span: 8 }}>
            <div className="content">
            <div className="contentHolder">
              <div className="titleHolder">
              <h2>About Us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                necessitatibus officiis repudiandae est deserunt delectus
                dolorem iure porro distinctio fuga, nostrum doloremque. Facilis
                porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Magnam aut a porro, adipisci
                quidem sint enim pariatur ducimus, saepe voluptatibus inventore
                commodi! Quis, explicabo molestias libero tenetur temporibus
                perspiciatis deserunt.
              </p>
            </div>
            </div>
          </Col>
          <Col md={{ span: 8 }}>
            <div className="contentHolderimg">
              <img alt="aboufruits" src={aboufruits} />
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
