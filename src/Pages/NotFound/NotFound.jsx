import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    let navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col className='text-center my-5'>
                        <div>
                            <img src='https://i.postimg.cc/QMyXKM7w/404.png' alt="404" className='img-fluid errorImage'/>
                        </div>
                        <div className='error-text my-4'>
                            <h3>Error 404</h3>
                            <h2>Oops This is Awkward...</h2>
                            <p>We couldn't find the page you were looking for, or maybe it never existed. Try heading back to the home page.</p>
                            <Button variant="primary" className='mt-3' onClick={()=> navigate('/')}>Back To Home Page</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;