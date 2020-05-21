import React, { Component } from "react";

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
                Stephen Welsh
              </h1>
              <p class="lead" style={{ color: "white", "font-size": "2rem" }}>
                IT Student at NC State University
              </p>
              <div class="btn-group mr-2">
                <button class="btn btn-dark" href="#">
                  Resume
                </button>
              </div>
              <button class="btn btn-dark" href="#">
                Projects
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
