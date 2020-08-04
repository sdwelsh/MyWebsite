import React, { Component } from "react";
import Typical from "react-typical";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <header class="masthead masthead-background">
        <div class="container h-100">
          <div class="row h-85 align-items-center">
            <div class="col-12 text-left">
              <h1
                class="font-weight-light"
                style={{ color: "white", "font-size": "3.5rem" }}
              >
                <Typical
                  steps={["Stephen", 1000, "Stephen Welsh", 500]}
                  loop={1}
                  wrapper="p"
                />
              </h1>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
              <p class="lead" style={{ color: "white", "font-size": "2rem" }}>
                IT Student at NC State University
              </p>
              <div class="btn-group mr-2">
                <button
                  class="btn btn-dark"
                  onClick={() => this.props.onButton("Resume")}
                >
                  <Router>
                    <Link to="/resume" style={{ color: "white" }}>
                      Resume
                    </Link>
                    <Switch>
                      <Route path="/resume">
                        <Resume />
                      </Route>
                      <Route path="/projects">
                        <Projects />
                      </Route>
                    </Switch>
                  </Router>
                </button>
              </div>
              <button
                class="btn btn-dark"
                onClick={() => this.props.onButton("Projects")}
              >
                <Router>
                  <Link to="/projects" style={{ color: "white" }}>
                    Projects
                  </Link>
                  <Switch>
                    <Route path="/resume">
                      <Resume />
                    </Route>
                    <Route path="/projects">
                      <Projects />
                    </Route>
                  </Switch>
                </Router>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;

function Resume() {
  return () => this.props.onNav("Resume");
}

function Projects() {
  return () => this.props.onNav("Projects");
}
