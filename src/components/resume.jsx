import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Resume extends Component {
  render() {
    return (
      <div>
        <section class="ncstate mast text-white child">
          <Fade bottom>
            <div>
              <div class="container">
                <h1
                  style={{ "padding-top": "8rem" }}
                  class="font-weight-bolder text-center"
                >
                  Education
                </h1>

                <div style={{ "padding-top": "4rem" }}>
                  <h2>North Carolina State University, Raleigh NC</h2>
                  <h5>
                    Bachelor of Arts in Business Administration; Concentration
                    IT Management
                  </h5>
                  <h5>Minor: Computer Science</h5>
                  <h5>GPA: 3.94</h5>
                </div>

                <div style={{ "padding-top": "4rem" }}>
                  <h2>ESB Business School, Germany</h2>
                  <ul class="">
                    <li>
                      <h5>
                        Studied Accounting and Finance in Germany while also
                        studying German business practices and the effects of EU
                        regulations on European businesses.
                      </h5>
                    </li>
                    <li>
                      <h5>
                        Met with executives of multinational corporations during
                        site visits throughout Germany.
                      </h5>
                    </li>
                    <li>
                      <h5>
                        Developed a multicultural mindset while studying abroad.
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        <Fade bottom>
          <section class="mast child" style={{ "padding-bottom": "3rem" }}>
            <div class="container">
              <h1
                style={{ "padding-top": "6rem" }}
                class="font-weight-bolder text-center"
              >
                Experience
              </h1>

              <div style={{ "padding-top": "4rem" }}>
                <h2>Account Manager</h2>
                <h4>CMS Consulting</h4>
                <ul>
                  <li>
                    Led a six-student consultant team focused on marketing
                    consulting for a Raliegh based start-up, Flux Hybrids.
                  </li>
                  <li>
                    Facilitated all client communication, planned project scope,
                    and led the team project.
                  </li>
                  <li>
                    Produced marketing research and analysis in a 26 page
                    research paper and presented that research with
                    recommendations for next steps to our client.
                  </li>
                </ul>
              </div>

              <div style={{ "padding-top": "1rem" }}>
                <h2>Agency Consultant</h2>
                <h4>CMS Consulting</h4>
                <ul>
                  <li>
                    Served on a six-student consultant team focused on marketing
                    research for NC State.
                  </li>
                  <li>
                    Created a NC State Day of Giving marketing plan from data
                    collected throughout the semester from a successful survey
                    with 900 respondents and two focus groups of 15 students
                    each.
                  </li>
                  <li>
                    Presented to NC State clients data collected and our
                    marketing plan for the NC State Day of Giving for the next
                    semester
                  </li>
                </ul>
              </div>

              <div style={{ "padding-top": "1rem" }}>
                <h2>Manager</h2>
                <h4>Carolina Pool Managment</h4>
                <ul>
                  <li>
                    Managed employees through scheduling and compromise to
                    create a successful work environment and mediated all
                    complaints and issues with staff to build a better
                    environment for patrons.{" "}
                  </li>
                  <li>
                    Managed the logistical operations of a pool facility and
                    maintained the facility to improve company efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Fade>

        <section class="mast">
          <Fade bottom>
            <div>
              <h1
                style={{ "padding-top": "6rem", "padding-bottom": "6vw" }}
                class="font-weight-bolder text-center"
              >
                Skills
              </h1>
              <div class="container">
                <div class="row align-items-start">
                  <div
                    class="col-md text-center"
                    style={{ "padding-bottom": "3rem" }}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/2166/2166822.svg"
                      style={{ height: "5rem", width: "5rem" }}
                    />
                    <h4>Front End</h4>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaFX</p>
                  </div>

                  <div
                    class="col-lg text-center"
                    style={{ "padding-bottom": "3rem" }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/86/Database-icon.svg"
                      style={{ height: "5rem", width: "5rem" }}
                    />
                    <h4>Back End</h4>
                    <p>Java</p>
                    <p>Node.js</p>
                    <p>Springboot</p>
                  </div>

                  <div
                    class="col-lg text-center"
                    style={{ "padding-bottom": "3rem" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTak6px58w9KV-ezvPAVCyVBguI1ath9M89mkhDsdRLVAUJXBwZ&usqp=CAU"
                      style={{ height: "5rem", width: "5rem" }}
                    />
                    <h4>Management</h4>
                    <p>Timeline Creation</p>
                    <p>Project Managment</p>
                    <p>Client Interaction</p>
                    <p>Schedule Creation</p>
                  </div>

                  <div
                    class="col-lg text-center"
                    style={{ "padding-bottom": "3rem" }}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/1260/1260086.svg"
                      style={{ height: "5rem", width: "5rem" }}
                    />
                    <h4>Marketing</h4>
                    <p>Qualtrics</p>
                    <p>Focus Groups</p>
                    <p>Search Engine Optimization</p>
                    <p>Marketing Analysis</p>
                  </div>
                </div>
              </div>
              <div class="text-center" style={{ "padding-top": "6rem" }}>
                <a href="/Resume.docx" class="btn bg-dark text-white" download>
                  <img
                    src="https://img.icons8.com/all/500/download.png"
                    height="20rem"
                    width="30rem"
                    style={{ "padding-right": ".5rem" }}
                  />
                  Download My Resume
                </a>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    );
  }
}

export default Resume;
