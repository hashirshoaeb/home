// import React from 'react';
// import ExperienceCard from "./ExperienceCard";
// import { Jumbotron } from './migration';
// import {
//   Container,
//   Row,
// } from "react-bootstrap";
//
// const Experience = ({ experiences }) => {
//   return (
//     <section className="section">
//       <Container>
//         <Jumbotron className="bg-white">
//           <h2 className="display-4 mb-5 text-center">
//             {experiences.heading}
//           </h2>
//           <Row>
//             {
//               experiences.data.map((data, index) => {
//                 return <ExperienceCard key={index} data={data} />
//               })
//             }
//           </Row>
//         </Jumbotron>
//       </Container>
//     </section>
//   );
// }
//
// export default Experience;

import React, { useState, useEffect, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import { Jumbotron } from './migration';

const Experience = ({ experiences }) => {
 return (
     <section className="section">
         <Jumbotron fluid id="experience" className="bg-light m-0">
            <h2 className="display-4 mb-5 text-center">
                 {experiences.heading}
            </h2>
            <Container className="p-7">
                 <VerticalTimeline>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021-Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>Capital One</b></h3>
                        <h5 className="vertical-timeline-element-subtitle">Principal Data Scientist</h5>
                        <p>
                          Developing models to stop fraudsters.
                        </p>
                      </VerticalTimelineElement>

                       <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
                        date="2018-2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>Civis Analytics</b>
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">Senior Data Scientist ('18-'20), Staff Data Scientist ('20-'21)</h5>
                        <p>
                         Used machine learning to help democrats win elections.
                        </p>
                      </VerticalTimelineElement>


                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>US Census Bureau</b></h3>
                        <h5 className="vertical-timeline-element-subtitle">Survey Statistician Intern</h5>
                        <p>
                          Analysed Bayesian kriging methods on income-to-poverty ratios for public schools.
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
                        date="2016-2018"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>University of Michigan - Ann Arbor</b>
                        </h3>
                        <p>
                         MS: Applied Statistics
                        </p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2015–2016"

                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>OptionsHouse</b></h3>
                        <h5 className="vertical-timeline-element-subtitle">Jr Business Intelligence Analyst</h5>
                        <p>
                          Modeled user trading behavior and customer segmentation.
                        </p>
                      </VerticalTimelineElement>

                       <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
                        date="2011-2015"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                      >
                        <h3 className="vertical-timeline-element-title"><b>Northwestern University</b>
                        </h3>
                        <p>
                         BA: Mathematics | BA: Statistics | Minor: Computer Science
                        </p>
                      </VerticalTimelineElement>


                      <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                      />
                </VerticalTimeline>
            </Container>
        </Jumbotron>
     </section>

)
};

export default Experience;