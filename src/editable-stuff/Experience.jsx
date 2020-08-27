import React, { useState, useEffect, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
 return (
	 <Jumbotron fluid id="experience" className="bg-light m-0">
		<Container className="p-7">
			 <VerticalTimeline>
				
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2018 - 2020"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Founder(2018-)</h3>
					<h4 className="vertical-timeline-element-subtitle">NeoMentor Thrissur, Kerala, India</h4>
					<p>
					  Administration,Service delivery, Teaching, Management, Digital sales.
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
					date="2017"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Pearson Test for English (2017
) </h3>					
					<p>
					 Score overall 86 (9 Band or C2 level) in PTE academic .
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2014 - 2018"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Founder (2014-2018)</h3>
					<h4 className="vertical-timeline-element-subtitle">OnTime Thrissur, Kerala, India</h4>
					<p>
					  Administration,Service delivery, Sourcing,  Management , Overseas Trade, Digital sales.
					</p>
				  </VerticalTimelineElement>
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
					date="2012-2014"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">M.Tech (2012-2014)
					</h3><h4 className="vertical-timeline-element-subtitle">(Signal Processing and Embedded systems). Kannur University.</h4>					
					<p>
					 Thesis: Effect of Variations in Dimensions and self heating on FinFET .
					</p>
				  </VerticalTimelineElement>
				  
				  				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2009 - 2012"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Engineer (Instrumentation ) (2008-2012)</h3>
					<h4 className="vertical-timeline-element-subtitle">Konstelec Engineer Pvt. Ltd, India</h4>
					<p>
					  Worked in Capacity Expansion cum Modernisation Project Phase II of Bpcl
					</p>
				  </VerticalTimelineElement>
				    
				  				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2007 - 2009"
					
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Team Lead ( (2007-2009)</h3>
					<h4 className="vertical-timeline-element-subtitle">Sutherland Global Service Limited</h4>
					<p>
					  Worked with Sutherland Global Services for McAfee.Worked as Team Lead from July 2008 to January 2009.
					</p>
				  </VerticalTimelineElement>
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
					date="2002-2006"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">B.Tech (2002-2006)
					</h3><h4 className="vertical-timeline-element-subtitle">(Electronics and Communication). Cochin University.</h4>					
					<p>
					 Project : Standalone Ethernet Phone .
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

export default Experience;
