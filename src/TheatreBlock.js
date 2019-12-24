import React from "react";
import "./sass/TheatreBlock.scss";
import Carousel from "react-multi-carousel";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import TheatreCard from "./TheatreCard";
import "./logic/Api";
import Api from "./logic/Api";

class TheatreBlock extends React.Component {
  state = {
    theatreBlockData: [],
    theatreBlockState: 0
  };
  componentDidMount() {
    this.setState({
      theatreBlockData: []
    });
    Api.getArhDrama()
      .then(data => {
        this.setState({
          theatreBlockData: data,
          theatreBlockState: data.length && 1
        });
      })
      .catch(() => {
        this.setState({
          theatreBlockState: undefined
        });
      });
  }
  render() {
    let styles = {
      Spinner: {
        display:
          (this.state.theatreBlockState == undefined ||
            this.state.theatreBlockState) &&
          "none"
      },
      TheatreHeader: {
        maxWidth:
          (this.state.theatreBlockState == undefined ||
            this.state.theatreBlockState) &&
          "80%"
      },
      TheatreCarousel: {
        display:
          (this.state.theatreBlockState == undefined ||
            !this.state.theatreBlockState) &&
          "none"
      }
    };
    const Shows = this.state.theatreBlockData.map((item, i) => {
      return (
        <TheatreCard
          key={i}
          title={item.Title}
          description={item.Description}
          img={item.Img}
          buyUrl={item.BuyUrl}
          url={item.Url}
          hour={item.Hour}
          date={item.Date}
        />
      );
    });
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
      <div className="Theatre">
        <h2 className="Theatre-Header" style={styles.TheatreHeader}>
          Театр Драмы
        </h2>
        <div className="Spinner-Wrap">
          <Spinner animation="border" role="status" style={styles.Spinner}>
            <span className="sr-only"></span>
          </Spinner>
        </div>
        <div className="Theatre-Carousel-Wrap">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            className="Theatre-Carousel"
            style={styles.TheatreCarousel}
          >
            {Shows}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default TheatreBlock;
