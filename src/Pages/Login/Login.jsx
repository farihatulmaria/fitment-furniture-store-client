import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useSubmit from '../../hooks/useSubmit';
import './Login.css';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const {
        email,
        resetPassword,
        errorMessage,
        Login,
        signInWithGoogle
    }= useSubmit();

    return (
        <div className='login'>
            <Container fluid>
                <Row lg={2} md={2} xs={1} className='align-items-center'>
                    <Col>
                        <Card className='mx-auto p-3' style={{maxWidth:'450px'}}>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Login</h2>
                                </Card.Title>
                                <form onSubmit={handleSubmit(Login)}>
                                    
                                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                                    <input className="form-control my-3 my-3" type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 100})} />

                                    <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>
                                    <input className="form-control my-3" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

                                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                    <input className="form-control my-3" type="password" placeholder="Password" {...register("Password", {required: true})} />

                                    <Button variant='link' className='bg-white fs-6' onClick={()=>resetPassword(email)}>Forget Password ?</Button>

                                    <Button className='my-3 w-100' type='submit'>Login</Button>

                                    <p className='text-center fw-bold'>Don't have an account ?<Link to='/sign-up'> Sign Up </Link></p>
                                    <p className="text-danger my-2 mx-auto">{errorMessage}</p>
                                </form>
                            </Card.Body>
                        </Card>
                        <div className='my-5 text-center mx-auto'>
                            <Button onClick={signInWithGoogle}> <FontAwesomeIcon icon={faGoogle}/> Sign in with Google</Button>
                        </div>
                    </Col>
                    <Col className='pe-0'>
                        <div className="login-img">
                            <img src="https://i.postimg.cc/YqJgkbsc/furniture-1.jpg" className='img-fluid' alt="" style={{width:'100%'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;