import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import useUser from '../../hooks/useUser';
import Loading from '../../Shared/Loading/Loading';
import Banner from './Banner/Banner';
import './Home.css';
import Latest from './Latest/Latest';
import ServiceFeature from './ServiceFeature/ServiceFeature';
import Services from './Services/Services';
const Home = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const displayProducts = products.slice(0, 6);
    const [user] = useUser()
    return (
        <div className='home'>
            <Banner/>
            <Latest/>
            <div className="products my-5">
                <Container>
                    <Col>
                        <div className="section-title text-center">
                            <h2>Featured Products</h2>
                            <p>Will your clients accept that you go about things order.</p>
                        </div>
                    </Col>
                    {
                        products.length === 0 ? <Loading/> : 
                        <Row className='g-4 pt-5 pb-3' lg={3} md={2} xs={2}>
                            {
                                displayProducts.map(product => <Product product={product} key={product._id}/>)
                            }
                        </Row>

                    }
                    {
                        user.uid ?<Button className='w-100' onClick={()=> navigate('/manage-inventory')}>Manage Inventories</Button> :""
                    }
                </Container>
            </div>
            <Services/>
            <ServiceFeature/>
            <hr />
        </div>
    );
};

const Product = ({product})=>{
    const {name,img,price,quantity}= product;
    return (
        <Col>
            <Card> 
                <Card.Img variant="top" src={img} alt={name} className='img-fluid mx-auto product-img' />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <h5>${price}</h5>
                    <p>Items Available : {quantity}</p>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Home;