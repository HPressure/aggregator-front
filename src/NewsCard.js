import React from "react";
function NewsCard(props) {
  return (
    <article className="NewsCard">
      <a href={props.url} className="NewsCard-Link" target="_blank">
        <img className="NewsCard-Link-Img" src={props.img} alt="" />
        <div className="NewsCard-Link-Title-Wrap">
          <h2 className="NewsCard-Link-Title">{props.title}</h2>
        </div>
      </a>
    </article>
  );
}
export default NewsCard;
