import React from "react";
import "./css/TheatreBlock.min.css";
import Carousel from "react-multi-carousel";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";

class TheatreBlock extends React.Component {
  state = {};
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <div className="theatre-block">
        <h2 className="main-header">Театр</h2>
        {/* <Carousel responsive={responsive}>
          <div>
            <img
              src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
              alt=""
            />
          </div>
        </Carousel> */}
        <div className="theatre-container">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }
}
export default TheatreBlock;
