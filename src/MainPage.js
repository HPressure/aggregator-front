import React from "react";
import NewsBlock from "./NewsBlock";
import TheatreBlock from "./TheatreBlock";
class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NewsBlock />
        <TheatreBlock />
      </React.Fragment>
    );
  }
}
export default MainPage;
