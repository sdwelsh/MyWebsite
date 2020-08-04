import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//

class NavBar extends Component {
  render() {
    return (
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Link to="/" onClick={() => this.props.onNav("Home")}>
            <Navbar.Brand
              class="navbar-brand"
              onClick={() => this.props.onNav("Home")}
            >
              Stephen Welsh
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => this.props.onNav("AboutMe")}>
                <Link to="/about" style={{ color: "white" }}>
                  About Me
                </Link>
              </Nav.Link>

              <Nav.Link onClick={() => this.props.onNav("Resume")}>
                <Link to="/resume" style={{ color: "white" }}>
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link onClick={() => this.props.onNav("Projects")}>
                <Link to="/projects" style={{ color: "white" }}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link onClick={() => this.props.onNav("Contact")}>
                <Link to="/contact" style={{ color: "white" }}>
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBar;

function Home() {
  return () => this.props.onNav("Home");
}

function About() {
  return () => this.props.onNav("AboutMe");
}

function Resume() {
  return () => this.props.onNav("Resume");
}

function Projects() {
  return () => this.props.onNav("Projects");
}

function ContactMe() {
  return () => this.props.onNav("ContactMe");
}
