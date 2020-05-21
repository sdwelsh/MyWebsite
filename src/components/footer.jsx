import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="mainfooter bg-dark" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="align-items-center">
              <div class="align-items-center">
                <h4>Follow Me</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoLinkedin" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 copy">
                <p class="text-center">
                  &copy; Copyright 2020 - Stephen Welsh Consulting. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
