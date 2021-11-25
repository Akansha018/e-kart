import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel variant="dark" className="slider">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src='/images/alexa.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src='/images/mouse.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/playstation.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
