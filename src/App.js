import React from "react";
import "./css/App.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import About from "./About";
import MainPage from "./MainPage.js";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <main>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
