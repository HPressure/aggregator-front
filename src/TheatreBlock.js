import React from "react";
import "./sass/TheatreBlock.scss";
import Carousel from "react-multi-carousel";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import TheatreCard from "./TheatreCard";

class TheatreBlock extends React.Component {
  state = {};
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 15
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            className="Theatre-Carousel"
            // centerMode={true}
            // customTransition="all infinite linear"
          >
            <TheatreCard
              img="https://arhdrama.culture29.ru/upload/resize_cache/iblock/016/304_218_2/_-_.jpg"
              title="Доктор Айболит"
              description="Футуристическая сказка (камерная сцена)
По сказке К. Чуковского
Режиссёр - Алексей Ермилышев"
            />
            <TheatreCard
              img="https://arhdrama.culture29.ru/upload/resize_cache/iblock/016/304_218_2/_-_.jpg"
              title="Доктор Айболит"
              description="Футуристическая сказка (камерная сцена)
По сказке К. Чуковского
Режиссёр - Алексей Ермилышев"
            />
            <TheatreCard
              img="https://arhdrama.culture29.ru/upload/resize_cache/iblock/016/304_218_2/_-_.jpg"
              title="Доктор Айболит"
              description="Футуристическая сказка (камерная сцена)
По сказке К. Чуковского
Режиссёр - Алексей Ермилышев"
            />
            <TheatreCard
              img="https://arhdrama.culture29.ru/upload/resize_cache/iblock/016/304_218_2/_-_.jpg"
              title="Доктор Айболит dffgdfsgsdf"
              description="Футуристическая сказка (камерная сцена)
По сказке К. Чуковского
Режиссёр - Алексей Ермилышев"
            />
            <TheatreCard
              img="https://arhdrama.culture29.ru/upload/resize_cache/iblock/016/304_218_2/_-_.jpg"
              title="Доктор Айболит"
              description="Футуристическая сказка (камерная сцена)
По сказке К. Чуковского
Режиссёр - Алексей Ермилышев"
            />
          </Carousel>
        </div>
      </div>
    );
  }
}
export default TheatreBlock;
