import React, { Suspense, lazy } from "react";
import "./sass/News.scss";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Api from "./logic/Api";
import NetworkError from "./NetworkError";
import NewsCard from "./NewsCard";
class News extends React.Component {
  state = {
    newsState: false,
    newsData: [],
    newsBtnState: false
  };
  componentDidMount() {
    this.setState({
      newsState: false,
      newsData: [],
      newsBtnState: false
    });
    Api.get29()
      .then(data => {
        this.setState({
          newsData: data,
          newsState: data.length && true
        });
      })
      .catch(er => {
        console.log(er);
        this.setState({
          newsState: undefined
        });
      });
  }
  handleExpandNewsClick = () => {
    this.setState(prevState => {
      let btn = prevState.newsBtnState;
      return { newsBtnState: !btn };
    });
  };
  render() {
    let styles = {
      NewsHeader: {
        maxWidth:
          (this.state.newsState == undefined || this.state.newsState) && "100%"
      },
      NewsContainer: {
        maxHeight: this.state.newsBtnState ? "min-content" : "270px"
      }
    };
    const News = this.state.newsData.map((item, i) => {
      return (
        <NewsCard
          key={i}
          img={item.newsImg}
          title={item.newsTitle}
          url={item.newsURL}
        />
      );
    });
    return (
      <div className="News">
        <h2 className="News-Header" style={styles.NewsHeader}>
          Новости
        </h2>
        <div className="News-NewsContainer" style={styles.NewsContainer}>
          {this.state.newsState == false && (
            <div className="Spinner-Wrap">
              <Spinner animation="border" role="status">
                <span className="sr-only"></span>
              </Spinner>
            </div>
          )}
          {News}
        </div>
        {this.state.newsState && (
          <Button
            variant="outline-primary"
            onClick={this.handleExpandNewsClick}
            className="News-Button News-Button_expand"
          >
            {this.state.newsBtnState ? "Свернуть" : "Больше новостей"}
          </Button>
        )}

        {this.state.newsState == undefined && <NetworkError />}
      </div>
    );
  }
}
export default News;
