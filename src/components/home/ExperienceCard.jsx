import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="4">
             <Card className="shadow--hover shadow-sm border-1 text-center rounded mx-3">
               <Card.Header>
                    <h5>{data.company}</h5>
                </Card.Header>
                <Card.Body className="pb-5">
                    <Card.Img className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg" src={data.companylogo} style={{ width: "100px" }} alt=""/>
                    <Card.Title tag="h5">{data.heading}</Card.Title>
                    <Card.Subtitle>{data.date}</Card.Subtitle>
                    <Card.Text className="my-3 text-left">
                        {data.description}
                    </Card.Text>
                    <ul className="text-left">
                            {
                                data.descriptionBullets ? 
                                data.descriptionBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                    <div>
                    </div>
                </Card.Body>
            </Card> 
        </Col>
     );
}
 
export default ExperienceCard;