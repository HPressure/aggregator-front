import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./sass/TheatreCarousel.scss";

function TheatreCarousel(props) {
  const responsive = {
    var1: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    var2: {
      breakpoint: { max: 2000, min: 1800 },
      items: 6
    },
    var3: {
      breakpoint: { max: 1800, min: 1100 },
      items: 4
    },
    var4: {
      breakpoint: { max: 1100, min: 850 },
      items: 3
    },
    var5: {
      breakpoint: { max: 850, min: 600 },
      items: 2
    },
    var6: {
      breakpoint: { max: 600, min: 320 },
      items: 1
    }
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      className="TheatreCarousel"
    >
      {props.children}
    </Carousel>
  );
}
export default TheatreCarousel;
