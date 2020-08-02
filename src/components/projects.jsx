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
                <img src="images/appIcon.png" class="card-img img-darken" />
                <h2 class="centered">Open Finance</h2>
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
            <h1 class="text-center">Open Finance</h1>
            <ul style={{ "padding-top": "3rem" }}>
              <li>
                A java based finance manager desktop application that gives
                users a real-time overview of their finances along with analysis
                of their current financial state.
              </li>
              <li>
                Open Finance is a project I created for the purpose of providing
                clear financial literacy to more people in the US. The program
                allows for users to create accounts to securly store their
                financial data. Users input their Long Term Assets (ie stocks,
                bonds, mutual funds, and physical assets), Short Term Assets
                (cash, savings, checking, cd's, and high-yield savings), Long
                Term Liabilities (morgages, auto loans, and other debt
                obligations), and Short Term Liabilities. This approach allows
                for a holistic view of the user's finances, and allows people to
                plan for the future knowing the current state of their finances.
              </li>
              <li>
                The system also implements user authentication and modern
                encryption standards for storing user data locally on the
                machine. The system uses AES Encryption with salt and hashed
                user passwords to allow for modern security of the locally
                stored files.
              </li>
              <li>
                Concepts that I used when creating this system would be the mvc
                design prinicple, doubly linked list with iterators, FSM's for
                validating user names, AES Encryption, Singleton Pattern,
                multithreading in the application, and use of external API's.
              </li>
              <li>
                Open Finance was written over a two month period with 10,000
                lines of code in over 44 files.
              </li>
            </ul>
            <div class="row" style={{ "padding-top": "2rem" }}>
              <div class="col-lg">
                <img src="images/openFinance1.png" class="card-img" />
              </div>
              <div class="col-lg">
                <img src="images/openFinance2.png" class="card-img" />
              </div>
              <div class="col-lg">
                <img src="images/openFinance3.png" class="card-img" />
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
                I led a six student consulting team for a new startup that makes
                hybrid conversion kits for vehicles. Hybrid conversion kits
                convert gas engine vehicles into cleaner hybrid vehicles helping
                reduce emissions and increase miles per gallon.
              </li>
              <li>
                During the project our team was tasked with conducting the
                initial marketing research and analysis of the current hybrid
                vehicle market. In our reasearch and analysis over the semester
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
                <li>Linkedin Sales Navigator</li>
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
                This website was created out of a desire to learn new skills in
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
                external Stylesheet.
              </li>
              <br />
              <li>
                This Website is hosted Via Netlify and is deployed using a
                github repo.
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
