import { faCreditCard, faShieldHalved, faTruckFast, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ServiceFeature.css';
const ServiceFeature = () => {
    return (
        <div className='ServiceFeature py-5'>
            <Container>
                <Row lg={4} md={2} xs={1} className='text-center'>
                    <Col>
                        <Card>
                            <Row className='align-items-center'>
                                <Col lg={3}>
                                    <FontAwesomeIcon icon={faTruckFast}/>
                                </Col>
                                <Col lg={9}>
                                    <Card.Body>
                                        <Card.Title>FREE SHIPPING</Card.Title>
                                        <Card.Text>Carrier information</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row className='align-items-center'>
                                <Col lg={3}>
                                    <FontAwesomeIcon icon={faCreditCard}/>
                                </Col>
                                <Col lg={9}>
                                    <Card.Body>
                                        <Card.Title>ONLINE PAYMENT</Card.Title>
                                        <Card.Text>Payment methods</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row className='align-items-center'>
                                <Col lg={3}>
                                    <FontAwesomeIcon icon={faUserTie}/>
                                </Col>
                                <Col lg={9}>
                                    <Card.Body>
                                        <Card.Title>24/7 SUPPORT</Card.Title>
                                        <Card.Text>Unlimited help desk</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row className='align-items-center'>
                                <Col lg={3}>
                                    <FontAwesomeIcon icon={faShieldHalved}/>
                                </Col>
                                <Col lg={9}>
                                    <Card.Body>
                                        <Card.Title>FREE RETURNS</Card.Title>
                                        <Card.Text>Track or off orders</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceFeature;