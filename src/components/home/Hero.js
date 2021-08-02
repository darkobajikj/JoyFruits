import React from "react";
import { Carousel,Button } from "antd";

const items = [
    {
      key: '1',
      title: 'Citrus Fruits',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

function Hero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 className="herotitle">{item.title}</h3>
                <p>{item.content}</p>
                <p>{item.img}</p>
                <div className="btnHolder">
                  <Button type="danger" size="large">Read More</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
