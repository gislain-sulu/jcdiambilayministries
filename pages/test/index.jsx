import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const handleOnDragStart = (e) => e.preventDefault();
const items = [
  <div className="item" data-value="1">
    <img
      src="http://placekitten.com/200/403"
      onDragStart={handleOnDragStart}
      className="yours-custom-class"
    />
  </div>,
  <div className="item" data-value="2">
    <img
      src="http://placekitten.com/200/405"
      onDragStart={handleOnDragStart}
      className="yours-custom-class"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="http://placekitten.com/200/406"
      onDragStart={handleOnDragStart}
      className="yours-custom-class"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src="http://placekitten.com/200/400"
      onDragStart={handleOnDragStart}
      className="yours-custom-class"
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="http://placekitten.com/200/408"
      onDragStart={handleOnDragStart}
      className="yours-custom-class"
    />
  </div>,
];

const Carousel = () => (
  <div className="itemsGroup">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  </div>
);

export default Carousel;
