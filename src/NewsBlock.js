import React from "react";
import "./css/NewsBlock.min.css";
import NewsCard from "./NewsCard";
import Button from "react-bootstrap/Button";
class NewsBlock extends React.Component {
  state = {
    newsBlockState: 0
  };
  componentDidMount() {
    this.setState({
      newsBlockState: 0
    });
  }
  handleClick = () => {
    this.setState(prevState => {
      let btn = prevState.newsBlockState;
      return { newsBlockState: !btn };
    });
  };
  render() {
    return (
      <div className="news-block">
        <h2 className="main-header">Новости</h2>
        <div
          className="news-container"
          style={{
            maxHeight: this.state.newsBlockState ? "min-content" : "300px"
          }}
        >
          <NewsCard
            img="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
            title="Видео с полигона Архангельска: смотрим, как разгружают мусор из Сабетты"
          />
          <NewsCard
            img="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
            title="Видео с полигона Архангельска: смотрим, как разгружают мусор из Сабетты"
          />
          <NewsCard
            img="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
            title="Видео с полигона Архангельска: смотрим, как разгружают мусор из Сабетты"
          />
          <NewsCard
            img="https://static.ngs.ru/news/99/preview/458dffc733148efe155587799d825ec609c715af_720_405_c.png"
            title="Видео с полигона Архангельска: смотрим, как разгружают мусор из Сабетты"
          />
        </div>
        <Button
          variant="outline-primary"
          onClick={this.handleClick}
          className="btn-expand-news"
        >
          {this.state.newsBlockState ? "Свернуть" : "Больше новостей"}
        </Button>
      </div>
    );
  }
}
export default NewsBlock;
