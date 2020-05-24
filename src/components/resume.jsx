import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Resume extends Component {
    render() { 
        return (
            <div>
                <Fade bottom>
                <div class="mast" style={{"padding-bottom": "3rem"}}>
                    <div class="container">
                        <h1 style={{"padding-top": "8rem"}} class="font-weight-bolder text-center">
                            Experience
                        </h1>

                        <div style={{"padding-top": "4rem"}}>
                            <h2>
                                Account Manager
                            </h2>
                            <h4>
                                CMS Consulting
                            </h4>
                           <ul>
                                <li>Lead a 6-student consultant team focused on marketing consulting for Flux Hybrids.</li>
                                <li>Facilitated all client communication, planned project scope, and lead the team project.</li>
                                <li>Produced marketing research and analysis in a research paper with recommendations for the clients next steps.</li>
                           </ul>
                        </div>

                        <div style={{"padding-top": "1rem"}}>
                            <h2>
                                Agency Consultant
                            </h2>
                            <h4>
                                CMS Consulting
                            </h4>
                           <ul>
                                <li>Served on a 6-student consultant team focused on marketing research for NC State.</li> 
                                <li>Created a NC State Day of Giving marketing plan from data collected throughout the semester from a successful survey with 900 respondents and two focus groups of 15 students each.</li>
                                <li>Presented to NC State clients data collected and our marketing plan for the NC State Day of Giving for the next semester</li>
                           </ul>
                        </div>

                        <div style={{"padding-top": "1rem"}}>
                            <h2>
                                Manager
                            </h2>
                            <h4>
                                Carolina Pool Managment
                            </h4>
                           <ul>
                                <li>Managed employees through scheduling and compromise to create a successful work environment and mediated all complaints and issues with staff to build a better environment for patrons.  </li> 
                                <li>Managed the logistical operations of a pool facility and maintained the facility to improve company efficiency.</li>
                           </ul>
                        </div>
                    </div>
                </div>
                </Fade>

                <div class="ncstate mast text-white">
                    <div class="container">
                        <h1 style={{"padding-top": "6rem"}} class="font-weight-bolder text-center">
                            Education
                        </h1>

                        <div style={{"padding-top": "4rem"}}>
                            <h2>
                                North Carolina State University, Raleigh NC
                            </h2>
                            <h5>
                                <i>Bachelor of Arts in Business Administration; Concentration IT Management</i>
                            </h5>
                            <h5>
                                <i>Minor: Computer Science</i>
                            </h5>
                            <h5>
                                GPA: 3.940
                            </h5>
                        </div>

                        <div style={{"padding-top": "4rem"}}>
                            <h2>
                                ESB Business School, Germany
                            </h2>
                            <ul class="">
                                <li><h5>Studied Accounting and Finance in Germany while also studying German business practices and the effects of EU regulations on European businesses.</h5></li>
                                <li><h5>Met with executives of multinational corporations during site visits throughout Germany.</h5></li>
                                <li><h5>Developed a multicultural mindset while studying abroad.</h5></li>
                            </ul>
                        </div>
                    </div> 
                </div>

                <div class="mast">
                    <div class="container">
                        <h1 style={{"padding-top": "4rem"}} class="font-weight-bolder">
                            Skills
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Resume;