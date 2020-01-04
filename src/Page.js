import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./sass/Page.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/_custom-bootstrap.scss";

const AboutPage = lazy(() => import("./AboutPage"));
const HomePage = lazy(() => import("./HomePage"));
const ContactPage = lazy(() => import("./ContactPage"));

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
              <Suspense fallback={<div></div>}>
                <HomePage />
              </Suspense>
            </Route>
            <Route path="/about">
              <Suspense fallback={<div></div>}>
                <AboutPage />
              </Suspense>
            </Route>
            <Route path="/contacts">
              <Suspense fallback={<div></div>}>
                <ContactPage />
              </Suspense>
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
