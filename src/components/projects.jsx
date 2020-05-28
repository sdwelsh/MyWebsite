import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

class Projects extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc",
    });
  }

  render() {
    return (
      <section>
        <div class="mast" style={{ background: "#F3F3F3" }}>
          <div class="container">
            <h1
              class="text-center"
              style={{ "padding-top": "8rem", "font-size": "3.5rem" }}
            >
              Projects
            </h1>

            <div class="row" style={{ "padding-top": "6rem" }}>
              <div
                class="col-md img-margin img-container img-hover-zoom img-hover-zoom--blur"
                onClick={() =>
                  scrollToComponent(this.Manager, {
                    offset: 0,
                    align: "top",
                    duration: 1500,
                  })
                }
              >
                <img
                  src="images/registrationManager.png"
                  class="card-img img-darken"
                />
                <h2 class="centered">Registration Manager</h2>
              </div>

              <div
                class="col-md img-hover-zoom img-hover-zoom--blur img-margin img-container"
                onClick={() =>
                  scrollToComponent(this.Cms, {
                    offset: 0,
                    align: "top",
                    duration: 1500,
                  })
                }
              >
                <img src="cms.png" class="card-img img-darken" />
                <h2 class="centered">Marketing Research and Analysis</h2>
              </div>

              <div
                class="col-md img-margin img-container img-hover-zoom img-hover-zoom--blur"
                onClick={() =>
                  scrollToComponent(this.Website, {
                    offset: 0,
                    align: "top",
                    duration: 1500,
                  })
                }
              >
                <img src="website.png" class="card-img img-darken" />
                <h2 class="centered">My Website</h2>
              </div>
            </div>
          </div>
        </div>

        <section
          ref={(section) => {
            this.Manager = section;
          }}
        >
          <div class="mast container" style={{ "padding-top": "4rem" }}>
            <h1 class="text-center">Registration Manager</h1>
            <ul style={{ "padding-top": "3rem" }}>
              <li>
                A java based course registration system software created as a
                stand alone local system.
              </li>
              <li>
                Pack Scheduler allows for multiple users and user interactions
                to the system software. Students are allowed to manage their
                schdules, adding and removing classes within their course limit.
                Faculty is able to see who is registered in their classes and
                adds or removes students from a wait list. Admin registrars are
                allowed to access the entire system and can change every aspect
                of the system.
              </li>
              <li>
                The system also implements user authentication and system
                administrator authentication. To provide different views for
                students, faculty, and admin registrars who have access to the
                whole system.
              </li>
              <li>
                Concepts that I used when creating this system would be the mvc
                design prinicple, doubly linked list with iterators, FSM's for
                validating course names, and stacks/queus for the waitlist
                functionality.
              </li>
              <li>
                <u>Github Repo:</u>{" "}
                <a
                  href="https://github.com/sdwelsh/RegistrationManager.git"
                  class="container text-fluid"
                >
                  https://github.com/sdwelsh
                </a>
              </li>
            </ul>
            <div class="row" style={{ "padding-top": "2rem" }}>
              <div class="col-md">
                <img src="images/login.png" class="card-img" />
              </div>
              <div class="col-md">
                <img src="images/registrationManager.png" class="card-img" />
              </div>
              <div class="col-md">
                <img src="images/student.png" class="card-img" />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(section) => {
            this.Cms = section;
          }}
          style={{ background: "#F3F3F3" }}
        >
          <div class="mast container" style={{ "padding-top": "4rem" }}>
            <h1 class="text-center">Marketing Research And Analysis </h1>
            <ul style={{ "padding-top": "4rem" }}>
              <li>
                I lead a six student consulting team for a new startup in hybrid
                conversion kits. Hybrid conversion kits are kits ment to convert
                vehicles using gas into clean hybrid vehicles helping reduce
                emissions and increase mpg.
              </li>
              <li>
                During the project our team was tasked with conducting the
                initial marketing research and analysis of the current hybrid
                vehicle climate. In our reasearch and analysis over the semester
                we delivered:
              </li>
              <ul>
                <li>SWOT Analysis</li>
                <li>Competitor Analysis</li>
                <li>Marketing Channel Research</li>
                <li>Ad Messaging</li>
                <li>Client Engagement</li>
                <li>Mock Emails</li>
                <li>Brochure Templates</li>
              </ul>
              <li>
                Along with our research and analysis we also collected potential
                client data in a spreadsheet and implemented a survey campaign
                to poll potential clients.
              </li>
              <li>Tools used during the project:</li>
              <ul>
                <li>Qualtrics</li>
                <li>Slack</li>
                <li>Excel</li>
                <li>Drive</li>
              </ul>
            </ul>
            <div class="row align-items-center text-center">
              <div class="col-sm">
                <img src="images/marketing1.png" height="200px" width="200px" />
              </div>
              <div class="col-sm">
                <img src="images/marketing2.png" height="200px" width="200px" />
              </div>
              <div class="col-sm">
                <img src="images/marketing3.png" height="200px" width="200px" />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(section) => {
            this.Website = section;
          }}
        >
          <div class="mast container" style={{ "padding-top": "4rem" }}>
            <h1 class="text-center">My Website</h1>
            <ul style={{ "padding-top": "4rem" }}>
              <li>
                This website was created out of a want to learn new skills in
                web development outside my coursework.
              </li>
              <br />
              <li>
                This site is a single React Native app that uses the react
                library to serve javascript and html content to the user.
              </li>
              <br />
              <li>
                The websites CSS is a combination of Bootstrap CSS and my own
                external Stylesheet.{" "}
              </li>
              <br />
              <li>
                This Website is hosted Via Netlify and is deploye using the
                github repo to depoloy the website on Netlify.
              </li>
              <br />
              <li>
                Here is the link to this websites Github repo:{" "}
                <a href="https://github.com/sdwelsh/MyWebsite">
                  https://github.com/sdwelsh/MyWebsite
                </a>
              </li>
            </ul>
            <div
              class="row align-items-center"
              style={{ "padding-top": "3rem" }}
            >
              <div
                class="col-sm text-center"
                style={{ "padding-bottom": "1rem" }}
              >
                <img src="images/react.png" height="200px" width="auto" />
              </div>
              <div class="col-sm text-center">
                <img src="images/bootstrap.png" height="200px" width="200px" />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Projects;
