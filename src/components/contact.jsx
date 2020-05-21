import React, { Component } from "react";

//style={{ "margin-left": "3rem" }}

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

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
            
          <form onSubmit={this.handleSubmit}>
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" name="name" value={this.name} onChange={this.handleChange} class="form-control"/>
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="email" name="email" value={this.email} onChange={this.handleChange} class="form-control"/>
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="email" name="email" value={this.email} onChange={this.handleChange} class="form-control"/>
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea name="message" value={this.message} onChange={this.handleChange} class="form-control"/>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
              <button
                class="btn btn-primary text-white"
                type="submit"
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
