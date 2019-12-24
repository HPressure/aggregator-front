import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import HomePage from "./HomePage";
import Footer from "./Footer";

import "./sass/Page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/_custom-bootstrap.scss";
import { render } from "react-dom";

class Page extends React.Component {
  state = {
    BtnToTopState: 0
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      document.documentElement.scrollTop > 300
        ? this.setState({
            BtnToTopState: 1
          })
        : this.setState({
            BtnToTopState: 0
          });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  render() {
    let styles = {
      BtnToTop: {
        pointerEvents: !this.state.BtnToTopState && "none",
        opacity: !this.state.BtnToTopState && "0"
      }
    };
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
        <button
          className="Page-BtnToTop"
          style={styles.BtnToTop}
          onClick={this.handleToTop}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </Router>
    );
  }
}

export default Page;
