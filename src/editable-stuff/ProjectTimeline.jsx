import React, { useState, useEffect, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from '@material-ui/core/Button';

const ProjectTimeline = () => {
 return (
 <Jumbotron fluid id="projecttimeline" className="bg-light m-0">
	<Container className="p-6">
		 <VerticalTimeline>
			
			<VerticalTimelineElement
				iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				icon={<StarIcon />}
			  />
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
				date="2011 - present"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<WorkIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Creative Director</h3>
				<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
				<p>
				  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
				</p>
				 <div className="ResumeProjectsBlock-links">
                
                  <Button
                   
                    variant="outlined"
                    color="default"
                    target="_blank"
                    href={"bibinvargheset"}
                  >
                    {"Bibin"}
                  </Button>
				   <Button
                   
                    variant="outlined"
                    color="default"
                    target="_blank"
                    href={"bibinvargheset"}
                  >
                    {"Bibin"}
                  </Button>
                
				 </div>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				date="2010 - 2011"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<WorkIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Art Director</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
				  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2008 - 2010"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<WorkIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
				  User Experience, Visual Design
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2006 - 2008"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<WorkIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Web Designer</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
				  User Experience, Visual Design
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="April 2013"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
				<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
				<p>
				  Strategy, Social Media
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="November 2012"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
				<h4 className="vertical-timeline-element-subtitle">Certification</h4>
				<p>
				  Creative Direction, User Experience, Visual Design
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="2002 - 2006"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<SchoolIcon />}
			  >
				<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
				<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
				<p>
				  Creative Direction, Visual Design
				</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
				iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				icon={<StarIcon />}
			  />
		</VerticalTimeline>
	</Container>
 </Jumbotron>
)
};

export default ProjectTimeline;
