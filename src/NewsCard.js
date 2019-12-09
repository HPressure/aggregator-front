import React from "react";
import "./css/NewsCard.min.css";
function NewsCard(props) {
  return (
    <article className="news-card">
      <img className="news-img" src={props.img} alt="" />
      <div className="news-title-wrap">
        <h2 className="news-title">{props.title}</h2>
      </div>
    </article>
  );
}
export default NewsCard;