import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs py-5'>
            <Container>
                <Row lg={2} md={2} xs={1} className='g-4'>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Difference between javascript and node js ?</h2>
                                </Card.Title>
                                <Table className='mt-5' striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Javascript</th>
                                            <th>Node js</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>It's a programming language</td>
                                            <td>It's a js runtime </td>
                                        </tr>
                                        <tr>
                                            <td>It can only run on browsers</td>
                                            <td>It can run on browsers or outside of the browsers</td>
                                        </tr>
                                        <tr>
                                            <td>It is used for the client side</td>
                                            <td>It is used for the server side</td>
                                        </tr>
                                        <tr>
                                            <td>It is used in frontend development</td>
                                            <td>It is used in serve-side development</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Differences between SQL and NoSQL databases ? </h2>
                                </Card.Title>
                                <Table className='mt-5' striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>SQL</th>
                                            <th>NoSQL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Relational DataBase Management System (RDBMS)</td>
                                            <td>Non-relational database system</td>
                                        </tr>
                                        <tr>
                                            <td>These databases have fixed schema</td>
                                            <td>These databases have dynamic schema</td>
                                        </tr>
                                        <tr>
                                            <td>These databases aren't suited for hierarchial data storage</td>
                                            <td>These databases are best suited for hierarchial data storage</td>
                                        </tr>
                                        <tr>
                                            <td>These databases are best suited for complex queries</td>
                                            <td>These databases aren't suited for complex queries</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>When should you use nodejs and when should you use mongodb ? </h2>
                                </Card.Title>
                                Nodejs is a JavaScript engine that runs your js code out of the browser. Generally, it's used to make servers that can respond to web request. 
                                <br />
                                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or change data in a database.It's for storing data. 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>What is the purpose of jwt and how does it work ?</h2>
                                </Card.Title>
                                JWT, or JSON Web Token, is a public standard used to share a security system between two teams — a customer and a server. Each JWT contains decoded JSON objects, such as a set of claims. JWTs are linked using a cryptographic algorithm to ensure that the claims can not be altered after the token is issued.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;

