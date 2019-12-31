import React from "react";

import "./sass/HomePage.scss";
import News from "./News";
import Theatre from "./Theatre";
function HomePage(props) {
  return (
    <div className="HomePage">
      <News />
      <Theatre />
    </div>
  );
}
export default HomePage;
