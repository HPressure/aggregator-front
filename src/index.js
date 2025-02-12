import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import Page from "./Page";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Page />, document.querySelector(".Page"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
