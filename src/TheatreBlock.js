import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/TheatreBlock.min.css";
class TheatreBlock extends React.Component {
  state = {};
  render() {
    return (
      <div className="theatre-block">
        <h2 className="main-header">Театр</h2>

        <div className="theatre-container">
          <Carousel className="theatre-carousel">
            <Carousel.Item>
              <React.Fragment
                style={{ display: "flex", width: "100%", flexFlow: "row" }}
              >
                <img
                  style={{ width: "100px", height: "auto" }}
                  src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
                  alt="First slide"
                />
                <img
                  style={{ width: "100px", height: "auto" }}
                  src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
                  alt="First slide"
                />
              </React.Fragment>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default TheatreBlock;
