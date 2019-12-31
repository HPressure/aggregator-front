import React from "react";
import "./sass/ContactCard.scss";

function ContactCard(props) {
  return (
    <div className="ContactCard">
      <div className="ContactCard-Left">
        <div className="ContactCard-Left-Inner">
          <img className="ContactCard-Left-Inner-Img" src={props.img} alt="" />
        </div>
      </div>
      <div className="ContactCard-Right">
        <h2 className="ContactCard-Right-Name">{props.name}</h2>
        <p className="ContactCard-Right-Info">{props.info}</p>
      </div>
    </div>
  );
}
export default ContactCard;
