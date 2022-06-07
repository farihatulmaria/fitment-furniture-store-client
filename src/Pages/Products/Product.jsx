import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
const Product = ({product}) => {
    const {_id,name,img ,description, price,quantity,supplier}= product;
    const navigate = useNavigate();
    const [user] = useUser();

    return (
        <Col>
            <Card> 
                <Card.Img variant="top" src={img} alt={name} className='img-fluid mx-auto product-img' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p className='my-3'>{description}</p>
                    <h5>${price}</h5>
                    <p>Items Available : {quantity}</p>
                    <h4>{supplier}</h4>
                    {
                        user.uid ? <Button className='mt-4 w-100' onClick={()=>navigate(`/inventory/${_id}`)}>Manage Product</Button> :''
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;