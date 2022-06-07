import { faHouse, faMenorah, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Services.css';
const Services = () => {

    return (
        <div className='services'>
            <Container>
                <Col>
                    <div className="section-title text-center">
                        <h2>Our Best Service</h2>
                        <p>Authorities in our business will tell in no uncertain terms.</p>
                    </div>
                </Col>
                <Row lg={3} md={2} xs={1} className='py-5'>
                   <Col>
                        <div className="service my-5">
                            <Card className='text-center border-5 border-light'>
                                <Card.Body>
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={faObjectGroup} />
                                    </div>
                                    <div className="service-content my-5">
                                        <h4>Decorative Columns</h4>
                                        <p>Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly.</p>
                                        <Button className='service-btn '>View More</Button>    
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                   </Col>
                    
                   <Col>
                        <div className="service my-5">
                            <Card className='text-center border-5 border-light'>
                                <Card.Body>
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={faHouse} />
                                    </div>
                                    <div className="service-content my-5">
                                        <h4>Home Vases</h4>
                                        <p>Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dearbut what she been over body.</p>
                                        <Button className='service-btn '>View More</Button>    
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                   </Col>
                   <Col>
                        <div className="service my-5">
                            <Card className='text-center border-5 border-light'>
                                <Card.Body>
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={faMenorah} />
                                    </div>
                                    <div className="service-content my-5">
                                        <h4>Aroma Candles</h4>
                                        <p>Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et officiis eart.</p>
                                        <Button className='service-btn '>View More</Button>    
                                    </div> 
                                </Card.Body>
                            </Card>
                        </div>
                   </Col>
                </Row>
            
            </Container>
        </div>
    );
};

export default Services;