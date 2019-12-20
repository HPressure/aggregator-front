import React from "react";
import "./sass/NetworkError.scss";
function NetworkError(props) {
  return (
    <div className="NetworkError" style={props.style}>
      <p className="NetworkError-Message">Что-то пошло не так...</p>
    </div>
  );
}
export default NetworkError;
