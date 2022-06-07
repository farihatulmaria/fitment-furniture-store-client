import { faPenAlt, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import useUserProducts from '../../hooks/useUserProducts';
import Loading from '../../Shared/Loading/Loading';
import './ManageInventories.css';
const ManageInventories = () => {
    const [products] = useProducts();
    const [userProducts] = useUserProducts();
    const navigate = useNavigate();
    if(products.length === 0 ){
        return <Loading/>
    }
    const handleItemDelete = (id,location) =>{
        const proceed = window.confirm('Do you really want to DELETE this item ? ')
        if(proceed){
            const url  = `https://fitment-furniture-store.herokuapp.com/${location}/${id}`;
            axios.delete(url)
            .then(res =>console.log(res.data))  
        }
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
                            products.map(product => 
                            <tr key={product._id}>
                                <DisplayProducts product={product}/>
                                <td>
                                    <Button className='px-3 mx-3 bg-success' onClick={()=>navigate(`/inventory/${product._id}`)}>
                                        <FontAwesomeIcon icon={faPenAlt}/>
                                    </Button>
                                    
                                    <Button onClick={()=>handleItemDelete(product._id,'inventory')} className='px-3 bg-danger'>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </Button>
                                </td>
                            </tr>)
                        }
                        {
                            userProducts.length !== undefined ? userProducts.map(product =>
                                <tr key={product._id}>
                                    <DisplayProducts product={product}/>
                                    <td>
                                        <Button className='px-3 mx-3 bg-success' onClick={()=>navigate(`/inventory/${product._id}`)}>
                                            <FontAwesomeIcon icon={faPenAlt}/>
                                        </Button>
                                        
                                        <Button onClick={()=>handleItemDelete(product._id,'userItems')} className='px-3 bg-danger'>
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </Button>
                                    </td>
                                </tr>) : ''
                        }
                    </tbody>
                </Table>
                <Button className='w-100' onClick={()=> navigate('/add-products')}><FontAwesomeIcon icon={faPlus}/> Add new Item</Button> 
            </Container>
        </div>
    );
};

const DisplayProducts = ({product}) =>{
    const {name,supplier,price} = product
    return(
        <>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{price}</td>
        </>
    )
}

export default ManageInventories; 



