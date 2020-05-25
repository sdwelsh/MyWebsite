import React, { Component } from "react";
import Social from "./socialFollow";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        class="mainfooter bg-dark"
        role="contentinfo"
        style={{ "padding-bottom": "1rem" }}
      >
        <div class="footer-middle">
          <div class="container">
            <div class="text-center">
              <Social />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
