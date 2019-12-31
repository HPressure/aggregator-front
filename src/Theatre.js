import React from "react";

import Spinner from "react-bootstrap/Spinner";
import TheatreCarousel from "./TheatreCarousel";
import NetworkError from "./NetworkError";
import TheatreCard from "./TheatreCard";

import "./sass/Theatre.scss";

import Api from "./logic/Api";

class Theatre extends React.Component {
  state = {
    theatreData: [],
    theatreState: false
  };
  componentDidMount() {
    this.setState({
      theatreData: [],
      theatreState: false
    });
    Api.getArhDrama()
      .then(data => {
        this.setState({
          theatreData: data,
          theatreState: data.length && true
        });
      })
      .catch(() => {
        this.setState({
          theatreState: undefined
        });
      });
  }
  render() {
    let styles = {
      TheatreHeader: {
        maxWidth:
          (this.state.theatreState == undefined || this.state.theatreState) &&
          "80%"
      }
    };
    const Shows = this.state.theatreData.map((item, i) => {
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

    return (
      <div className="Theatre">
        <h2 className="Theatre-Header" style={styles.TheatreHeader}>
          Театр Драмы
        </h2>
        {this.state.theatreState == false && (
          <div className="Spinner-Wrap">
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          </div>
        )}
        {this.state.theatreState && (
          <div className="Theatre-Carousel">
            <TheatreCarousel>{Shows}</TheatreCarousel>
          </div>
        )}
        {this.state.theatreState == undefined && <NetworkError />}
      </div>
    );
  }
}
export default Theatre;
