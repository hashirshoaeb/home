import React from 'react';

import { 
    Col,
    Button,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
             <Card className="shadow-lg--hover shadow border-0 text-center rounded my-2">
               <Card.Header>
                    <h5>{data.company}</h5>
                </Card.Header>
                <Card.Body className="py-5">
                    <Card.Img className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg" src={data.companylogo} style={{ width: "100px" }} alt=""/>
                    <Card.Title tag="h5">{data.role}</Card.Title>
                    <Card.Subtitle>{data.date}</Card.Subtitle>
                    <Card.Text className="my-3 text-left">
                        {data.desc}
                    </Card.Text>
                    <ul className="text-left">
                            {
                                data.descBullets ? 
                                data.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                    <div>
                    </div>
                    <Button variant="outline-success" size="lg">
                      Paper
                    </Button>{' '}
                </Card.Body>
            </Card> 
        </Col>
     );
}

export default ExperienceCard; 
