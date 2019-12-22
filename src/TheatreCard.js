import React from "react";
import Button from "react-bootstrap/Button";

function TheatreCard(props) {
  return (
    <div className="TheatreCard-Wrap">
      <p className="TheatreDate">{props.date}</p>
      <div className="TheatreCard">
        <div className="TheatreCard-Img-Wrap">
          <img src={props.img} alt="" className="TheatreCard-Img" />
          <div className="TheatreCard-Time">{props.hour}</div>
        </div>
        <div className="TheatreCard-Info">
          <h3 className="TheatreCard-Info-Title">{props.title}</h3>
          <p className="TheatreCard-Info-Description">{props.description}</p>
          <div className="TheatreCard-Info-Buttons">
            <Button variant="danger" block>
              Купить билет
            </Button>
            <Button variant="outline-danger" block>
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TheatreCard;
