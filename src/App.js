import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import AboutMe from "./components/aboutme";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Projects from "./components/projects";

class App extends Component {
  state = {
    name: "Home",
  };

  handleNav = (passedName) => {
    this.setState({ name: passedName });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onNav={this.handleNav} />
        {this.addElement()}
        <Footer />
      </React.Fragment>
    );
  }

  addElement() {
    if (this.state.name === "Home") {
      return <Home onButton={this.handleNav} />;
    } else if (this.state.name === "Projects") {
      return <Projects />;
    } else if (this.state.name === "Resume") {
      return <Resume />;
    } else if (this.state.name === "Contact") {
      return <Contact />;
    } else if (this.state.name === "AboutMe") {
      return <AboutMe />;
    } else {
      return <Home />;
    }
  }
}

export default App;
