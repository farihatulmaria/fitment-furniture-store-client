import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import useUserProducts from '../../hooks/useUserProducts';
import Loading from '../../Shared/Loading/Loading';
import Product from './Product';
const Products = () => {
    const [products] = useProducts();
    const [userProduct] = useUserProducts()
    if(products.length === 0){
        return <Loading/>;
    }
    return (
        <div className='products py-5'>
            <Container>
                <Row className='g-4' lg={3} md={2} xs={1}>
                    {
                        products.map(product => <Product product={product} key={product._id}/>)
                    }
                    {
                       userProduct.length !== undefined ? userProduct.map(product => <Product product={product} key={product._id}/>) : '' 
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;