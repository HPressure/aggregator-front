import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import HomePage from "./HomePage";
import Footer from "./Footer";

import "./sass/Page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/_custom-bootstrap.scss";

function Page(props) {
  return (
    <Router>
      <Header />

      <main className="Page-Main">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <div className="Page-Footer">
        <Footer />
      </div>
    </Router>
  );
}

export default Page;
