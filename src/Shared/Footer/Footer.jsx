import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    const dynamicYear = ()=>{
        const currentYear = new Date();
        const displayYear = currentYear.getFullYear();
        return displayYear;
    }
    return (
        <footer className='pt-5 pb-4'>
            <Container>
                <Row lg={4} md={2} xs={1}>
                    <Col>
                        <img src="https://i.postimg.cc/cLGM7mRM/logo.png" alt="logo" width='150px'/>
                        <p className='my-3'>Fitment is an Online Shopping eCommerce website in Bangladesh,that supplies products all metropolitan cities, like Dhaka, Chittagong, Rajshahi.</p>
                        
                    </Col>
                    <Col>
                        <h6>INFORMATION</h6>
                        <ul>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Faq</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>CUSTOMER SERVICES</h6>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Wishlist</li>
                            <li>Track orders</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>CONTACT US</h6>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationCrosshairs}/>  Mymenshing, Bangladesh</li>
                            <li><FontAwesomeIcon icon={faPhone}/>  Call: 0175-000-6776</li>
                            <li><FontAwesomeIcon icon={faEnvelope}/>  Email: farihatulmaria@gmail.com</li>
                        </ul>
                        <ul className="social-icons my-3">
                            <li><FontAwesomeIcon icon={faFacebookF}/></li>
                            <li><FontAwesomeIcon icon={faTwitter}/></li>
                            <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                            <li><FontAwesomeIcon icon={faPinterestP}/></li>
                        </ul>
                    </Col>
                </Row>
                <Col className='text-center mt-5'>
                    <p>Copy right {dynamicYear()} demo company </p>
                </Col>
            </Container>
        </footer>
    );
};

export default Footer;