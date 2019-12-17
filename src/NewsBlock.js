import React from "react";
import "./sass/NewsBlock.scss";
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
    const News = this.state.newsBlockData.map((item, i) => {
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
        <h2 className="News-Header">Новости</h2>
        <div
          className="News-Container"
          style={{
            maxHeight: this.state.newsBtnState ? "min-content" : "270px"
          }}
        >
          <div className="Spinner-Wrap">
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
          className="News-Button News-Button_expand"
        >
          {this.state.newsBtnState ? "Свернуть" : "Больше новостей"}
        </Button>
      </div>
    );
  }
}
export default NewsBlock;
