import React from "react";
import "./sass/TheatreBlock.scss";
import Carousel from "react-multi-carousel";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";

class TheatreBlock extends React.Component {
  state = {};
  render() {
    const responsive = {
      superLargeDesktop: {
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
      <div className="Theatre">
        <h2 className="Theatre-Header">Театр</h2>
        {/* <div className="Spinner-Wrap">
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div> */}
        <div className="Theatre-Carousel-Wrap">
          <Carousel responsive={responsive} className="Theatre-Carousel">
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
          </Carousel>
        </div>
      </div>
    );
  }
}
export default TheatreBlock;
