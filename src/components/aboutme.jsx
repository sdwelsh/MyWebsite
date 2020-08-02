import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div>
        <header class="masthead text-white darken">
          <div class="container">
            <section class="py-5">
              <div class="col-12 h-75 align-items-center text-center">
                <Fade bottom>
                  <h2
                    class="font-weight-light text-center"
                    style={{
                      "font-size": "3.5rem",
                      "margin-top": "10vw",
                      "margin-bottom": "1rem",
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
                    I'm a hardworking, personable, ambitious, professional
                    student able to organize, lead, and manage efficiently and
                    effectively while learning to adapt to a rapidly changing
                    professional environment.
                  </p>
                </Fade>
              </div>
            </section>
          </div>
        </header>
        <section class="py-5">
          <div
            class="container align-items-center"
            style={{ "margin-bottom": "3rem" }}
          >
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
              style={{
                "margin-top": "2rem",
                "margin-left": "1rem",
                "margin-bottom": "2rem",
              }}
            />
            <p style={{ "margin-top": "2rem" }}>
              I have a keen interest in pursuing a career combining business
              with IT management and have begun that journey at NC State
              concentrating in Business IT with a minor in Computer Science.
              Upon completion of my degree, I will have extensive knowledge of
              Java, C, SAS, MySQL, Excel data analysis, and Access as well as IT
              System and Database Management. As of the end of my sophomore
              year, I have completed introductory and intermediate Java
              programming classes in which I designed and created an enrollment
              system software and rental management software among other
              projects. From my business Information Systems class, I learned
              how to create solutions in Excel to analyze data to solve specific
              business problems related to production amounts, supply chain
              issues, and forecasting.
              <br />
              <br />
              In addition to my course load, I have recently developed a
              financial software program called Open Finance. The goal of the
              application is to securely track all of the users’ financial
              investments, assets, and liabilities from a business/accounting
              perspective. The program was written to give the users a holistic
              overview of their financial state that is updated in real time
              without a need for their bank login credentials. The program was
              written in Java and JavaFX, with 10,000 lines of code in 44 files.
              My goal in creating the software is to help people understand the
              issues surrounding finance, including wealth generation, asset
              diversification, and the seriousness of long-term debt, with an
              extremely user-friendly interface.
              <br />
              <br />
              During my sophomore year I was very active in CMS Consulting at NC
              State. In the spring semester, I served as an Account Manager for
              CMS and worked with a Raleigh based start-up, Flux Hybrids, on
              marketing research and analysis for its business. During the
              course of the semester as an Account Manager, I led a six-person
              marketing team and facilitated client communication with Flux
              Hybrids. My team provided the client with SWOT analysis,
              competitor analysis, and marketing channel research, brochure
              templates, and recommendations on ad messaging, and client
              engagement. In the previous semester, I had worked as a Consultant
              on the NC State Day of Giving team. This allowed me to gain
              experience collecting and analyzing marketing data through
              services such as Qualtrics. In addition, while working on the NC
              State Day of Giving team last semester, I presented our findings
              to the NC State client team. That experience helped me hone my
              presentation skills in a professional setting.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
