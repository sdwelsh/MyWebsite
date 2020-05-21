import React, { Component } from "react";

//style={{ "margin-left": "3rem" }}

class Contact extends Component {
  render() {
    return (
      <header className="masthead" style={{ "margin-top": "6rem" }}>
        <h1 class="h1-responsive font-weight-bold text-center my-4">
          Contact Me
        </h1>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact me
          directly.
        </p>

        <div class="row align-items-center">
        
          <div class="col-md-6 mb-md-0 mb-5 container">
            <form
              id="contact-form"
              name="contact-form"
              method="POST"
              netlify
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
              <button
                class="btn btn-primary text-white"
              >
                Send
              </button>
            </div>
            <div class="status"></div>
            </form>

           
          </div>

          <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <img
                  src={
                    "https://cdn0.iconfinder.com/data/icons/map-3/1024/pin9-512.png"
                  }
                  height="30px"
                  width="30px"
                />
                <p>
                  111 Friendly Drive, <br />
                  Raleigh NC
                </p>
                <br />
              </li>

              <li>
                <img
                  src={
                    "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                  }
                  height="30px"
                  width="30px"
                />
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+1 (980) 239-1466</p>
                <br />
              </li>

              <li>
                <img
                  src={"https://image.flaticon.com/icons/png/512/8/8807.png"}
                  height="30px"
                  width="30px"
                />
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>sdwelsh@ncsu.edu</p>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Contact;
