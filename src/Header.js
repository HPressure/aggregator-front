import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "./Logo";
import "./sass/Header.scss";
import "@fortawesome/fontawesome-free/css/all.css";
function AppHeader() {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">О проекте</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contacts">Контакты</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
            <Button variant="outline-secondary">
              <i class="fas fa-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
export default AppHeader;
