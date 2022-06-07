import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Latest.css';
const Latest = () => {
    return (
        <div className='latest'>
            <Container>
                <Row className='align-items-center g-3' >
                    <Col lg={7} md={12}>
                        <div className='decors'>
                            <img className='img-fluid w-100' src="https://i.postimg.cc/Ls6s2M3Q/decor-banner-1.jpg" alt="" />
                            <div className="content">
                                <h3>New Arrivals In Decorations.</h3>
                                <h6 className= 'my-2 ' >
                                    <ins>View More</ins>
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={12}>
                        <Row className='flex-column g-3'lg={1} md={1} xs={1}>
                            <Col>
                                <div className='decors'>
                                    <img className='img-fluid w-100'  src="https://i.postimg.cc/4xGd2c7g/decor-banner-2.jpg" alt="" />
                                    <div className="content">
                                        <h4>Decorative Wall Elements.</h4>
                                        <h6 className= 'my-2 ' >
                                            <ins>View More</ins>
                                        </h6>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='decors'>
                                    <img className='img-fluid w-100'  src="https://i.postimg.cc/L8VscsLZ/decor-banner-3.jpg" alt="" />
                                    <div className="content">
                                        <h4>Decorations For New Home.</h4>
                                        <h6 className= 'my-2 ' >
                                            <ins>View More</ins>
                                        </h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Container>
        </div>
    );
};

export default Latest;