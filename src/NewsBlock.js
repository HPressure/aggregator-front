import React from "react";
import "./css/NewsBlock.min.css";
import NewsCard from "./NewsCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import * as api from "./logic/getData";
class NewsBlock extends React.Component {
  state = {
    newsBlockState: 0,
    newsBlockData: [],
    newsBtnState: 0
  };
  componentDidMount() {
    this.setState({
      newsBlockState: 0,
      newsBlockData: [],
      newsBtnState: 0
    });
    api.get29().then(jsonData => {
      this.setState({
        newsBlockData: jsonData,
        newsBlockState: jsonData.length && 1
      });
    });
    // fetchApi("https://ruskino29.ru/api/v2/site/getSite")
    //   .then(data => data.json())
    //   .then(data => console.log(data));
  }
  handleExpandNewsClick = () => {
    this.setState(prevState => {
      let btn = prevState.newsBtnState;
      return { newsBtnState: !btn };
    });
  };
  render() {
    const News = this.state.newsBlockData.map(item => {
      return (
        <NewsCard
          img={item.newsImg}
          title={item.newsTitle}
          url={item.newsURL}
        />
      );
    });
    return (
      <div className="news-block">
        <h2 className="main-header">Новости</h2>
        <div
          className="news-container"
          style={{
            maxHeight: this.state.newsBtnState ? "min-content" : "300px"
          }}
        >
          <div className="spinner-wrapper">
            <Spinner
              animation="border"
              role="status"
              style={{ display: this.state.newsBlockState && "none" }}
            >
              <span className="sr-only"></span>
            </Spinner>
          </div>

          {News}
        </div>
        <Button
          style={{ display: this.state.newsBlockState == false && "none" }}
          variant="outline-primary"
          onClick={this.handleExpandNewsClick}
          className="btn-expand-news"
        >
          {this.state.newsBtnState ? "Свернуть" : "Больше новостей"}
        </Button>
      </div>
    );
  }
}
export default NewsBlock;
