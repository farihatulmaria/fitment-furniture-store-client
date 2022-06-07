import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Table } from 'react-bootstrap';
import useUserProducts from '../../hooks/useUserProducts';
import Loading from '../../Shared/Loading/Loading';
const MyItem = () => {
    const handleItemDelete = (id) =>{
        const proceed = window.confirm('Do you really want to DELETE this item ? ')
        if(proceed){
            const url  = `https://fitment-furniture-store.herokuapp.com/userItems/${id}`;
            axios.delete(url)
            .then(res =>console.log(res.data))
        }
    }
    const [userProducts] = useUserProducts();
        if(userProducts.length === undefined){
            return <Loading/>
        }
    return (
        <div className='manage-products py-5'>
            <Container>
                <Col>
                    <h2>Manage Inventories</h2>
                </Col>
                <Table className='my-5 managing-table' hover>
                    <thead>
                        <tr>
                            <th>Furniture</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userProducts.length !== undefined ? userProducts.map(product =>
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.supplier}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Button onClick={()=>handleItemDelete(product._id,'userItems')} className='px-3 bg-danger'>
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </Button>
                                    </td>
                                </tr>) : ''
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyItem;



