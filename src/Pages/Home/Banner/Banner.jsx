import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';

const Banner = () => {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000, })
    const props2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1500, })
    return (
        <Container>
            <Row lg={2} md={2} xs={1} className='align-items-center'>
            <animated.div style={props}>
                <Col>
                        <div className="banner-content">
                            <h2 className='fw-light'>Furniture Store</h2>
                        <h1 className='my-4'>
                            Interior Design Furniture
                            For Your Dream Room
                        </h1>
                        <p className='fs-4'>
                            Kiln-dried hardwood frame. Apartment friendly design Sinuous Spring suspension system</p>
                        </div>
                </Col>
            </animated.div>
            <animated.div style={props2}>
                <Col className='text-center'>
                        <img className='banner-img img-fluid' src='https://i.postimg.cc/FK1G3MFY/banner-img.png' alt="" width='500px' />
                </Col>
            </animated.div>
                
            </Row>
        </Container>
    );
};

export default Banner;