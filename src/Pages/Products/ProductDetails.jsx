import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const ProductDetails = () => {

    const {id} = useParams();
    const [product,setProduct] = useState();
    useEffect(() => {
      const url = `https://fitment-furniture-store.herokuapp.com/inventory/${id}`;
      axios.get(url)
      .then(res => setProduct(res.data))
    }, [id])


    const { register,handleSubmit } = useForm();

    const updateProduct = (data) =>{
        const delivered = parseInt(data.deliveredQuantity);
        const added = parseInt(data.addedQuantity);
        const newQuantity = product.quantity - delivered + added ;
        const url = `https://fitment-furniture-store.herokuapp.com/inventory/${id}`
        axios.put(url,{
            quantity: newQuantity,
        })
    }

    if(product === undefined){
        return <Loading/>
    }

    return (
        <div className='single-product py-5'>
            <Container>
                <Row className='align-items-center' lg={2} md={1} xs={1}>
                    <Col className='text-center'> 
                        <img src={product?.img} className='img-fluid mx-auto product-img' alt={product?.name} />
                    </Col>
                    <Col>
                        <h1 className='fw-normal'>{product?.name}</h1>
                        <h3 className='my-4'>${product?.price}</h3>
                        <p>{product?.description}</p>
                        <h4>{product?.supplier}</h4>
                        <h5>{product.quantity <= 0 ? 'Items is sold out' :`Quantity: ${product.quantity}` }</h5>
                        <Row>
                            <Col>
                                <Card className='my-4'>
                                    <Card.Body>
                                        <form onSubmit={handleSubmit(updateProduct)}>

                                            <label htmlFor="exampleInputName" className="form-label">Add Products</label>

                                            <input className="form-control my-3 my-3" type="number" placeholder="quantity" {...register("addedQuantity", {required: true, maxLength: 100})} required />

                                            <label htmlFor="exampleInputName" className="form-label">Delivered Products</label>

                                            <input className="form-control my-3 my-3" type="number" placeholder="quantity" {...register("deliveredQuantity", {required: true, maxLength: 100})} required />

                                            <Button type='submit'>Save</Button>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;




