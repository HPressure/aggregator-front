import React from "react";

function TheatreCard(props) {
  return (
    <div className="TheatreCard">
      <img src={props.img} alt="" className="TheatreCard-Img" />
      <div className="TheatreCard-Info">
        <h3 className="TheatreCard-Info-Title">{props.title}</h3>
        <p className="TheatreCard-Info-Description">{props.description}</p>
      </div>
    </div>
  );
}
export default TheatreCard;
