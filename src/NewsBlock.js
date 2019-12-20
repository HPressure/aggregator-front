import React from "react";
import "./sass/NewsBlock.scss";
import NewsCard from "./NewsCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Api from "./logic/Api";
import NetworkError from "./NetworkError";
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
    Api.get29()
      .then(data => {
        this.setState({
          newsBlockData: data,
          newsBlockState: data.length && 1
        });
      })
      .catch(() => {
        this.setState({
          newsBlockState: undefined
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
    let styles = {
      NewsHeader: {
        maxWidth:
          (this.state.newsBlockState == undefined ||
            this.state.newsBlockState) &&
          "100%"
      },
      Spinner: {
        display:
          (this.state.newsBlockState == undefined ||
            this.state.newsBlockState) &&
          "none"
      },
      NewsButtonExpand: {
        display: this.state.newsBlockState ? "block" : "none"
      },
      NetworkError: {
        display: this.state.newsBlockState != undefined && "none"
      }
    };
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
        <h2 className="News-Header" style={styles.NewsHeader}>
          Новости
        </h2>
        <div
          className="News-Container"
          style={{
            maxHeight: this.state.newsBtnState ? "min-content" : "270px"
          }}
        >
          <div className="Spinner-Wrap">
            <Spinner animation="border" role="status" style={styles.Spinner}>
              <span className="sr-only"></span>
            </Spinner>
          </div>

          {News}
        </div>
        <Button
          style={styles.NewsButtonExpand}
          variant="outline-primary"
          onClick={this.handleExpandNewsClick}
          className="News-Button News-Button_expand"
        >
          {this.state.newsBtnState ? "Свернуть" : "Больше новостей"}
        </Button>
        <NetworkError style={styles.NetworkError} />
      </div>
    );
  }
}
export default NewsBlock;
