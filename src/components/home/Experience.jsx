import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section section-lg mb-5">
            <Container>
            <h2 className="display-4 pb-5 text-center">
                    Experiences
                </h2>
                <Row>
                    {
                        experiences.map(data => {
                            return <ExperienceCard key={data.company} data={data} />
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
 
export default Experience;