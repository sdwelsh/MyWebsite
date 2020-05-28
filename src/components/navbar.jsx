import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, Image } from "react-bootstrap";

//

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand
          class="navbar-brand"
          onClick={() => this.props.onNav("Home")}
        >
          Stephen Welsh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link onClick={() => this.props.onNav("AboutMe")}>
              About Me
            </Nav.Link>
            <Nav.Link onClick={() => this.props.onNav("Resume")}>
              Resume
            </Nav.Link>
            <Nav.Link onClick={() => this.props.onNav("Projects")}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => this.props.onNav("Contact")}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
