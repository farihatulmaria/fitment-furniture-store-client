import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container className='d-flex align-items-center  justify-content-center' style={{minHeight:'60vh'}}>
           <Row>
               <Col className='text-center'>
                    <Spinner animation="border" variant="success" />
                    <div className="loading-content py-5 text-center">
                        <h3>Please , wait a little bit </h3>
                        <h3>If it takes a long time to load try to reload the page</h3>
                    </div>
               </Col>
           </Row>
        </Container>
    );
};

export default Loading;