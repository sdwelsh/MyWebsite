import React, { Component } from "react";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div>
        <header class="masthead text-white darken">
          <div class="container">
            <section class="py-5">
              <div class="col-12 h-75 align-items-center">
                <h2
                  class="font-weight-light text-center"
                  style={{
                    "font-size": "3.5rem",
                    "margin-top": "10vw",
                    "margin-bottom": "1rem"
                  }}
                >
                  Professional Summary
                </h2>
                <br />
                <p
                  class="text-center"
                  style={{
                    "font-size": "1.5rem",
                    "margin-top": "1rem",
                  }}
                >
                  I'm a hardworking, personable, ambitious, professional student
                  able to organize, lead, and manage efficiently and effectively
                  while learning to adapt to a rapidly changing professional
                  environment.
                </p>
              </div>
            </section>
          </div>
        </header>
        <section class="py-5">
          <div class="container align-items-center" style={{"margin-bottom": "3rem"}}>
            <h2
              class="font-weight-light"
              style={{
                "margin-top": "1rem",
              }}
            >
              About Me
            </h2>
            <img
              src={"https://i.imgur.com/hAysmR5.jpg"}
              height="350px"
              width="500px"
              class="img-fluid float-right"
              style={{ "margin-top": "2rem", "margin-left": "1rem", "margin-bottom": "2rem" }}
            />
            <p style={{ "margin-top": "2rem" }}>
              I have a keen interest in pursuing a career combining business
              with IT system management and have begun that journey at NC State.
              While at NC State, I have studied information systems in my course
              work, and I have a great interest in the Information Technology
              field. From my Information Systems class, I learned how to create
              solutions in excel to analyze data to solve specific business
              problems related to production amounts, supply chain issues, and
              forecasting. I have also taken courses in Computer Science
              allowing me to design and create Enrollment System Software and
              Rental Management Software. This allowed me to obtain a key
              understanding of programming concepts such as data structures and
              abstraction to help make better, faster software.
              <br />
              <br />
              In addition to my course load, I have been very active in the
              Creative Marketing Solutions Agency at NC State. Recently, I have
              become an Account Manager for the Agency and am currently working
              with Flux Hybrids on a marketing project for their business. Last
              semester, I worked as an Agency Consultant on the NC State Day of
              Giving team. This allowed me to gain first-hand experience working
              on a project team in a professional environment while also gaining
              significant experience collecting and analyzing marketing data
              through services such as Qualtrics. In addition, while working on
              the NC State Day of Giving team last semester, I presented our
              findings to the NC State client. This was my first professional
              presentation made to a client and provided me clear insight into
              how professional presentations differ from those simply made in a
              classroom setting. It was a tremendously rewarding experience
              which has only increased my interest in working with clients in
              the future.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
