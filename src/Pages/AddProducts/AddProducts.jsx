import axios from 'axios';
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useUser from '../../hooks/useUser';
const AddProducts = () => {
    const [user] = useUser()

    const { register, handleSubmit } = useForm();
    
    const  AddProduct = (productData) =>{
        // without this method the price and quantity can't be a number
        const product = {
            email: productData.email,
            name: productData.name,
            img: productData.img,
            description: productData.description,
            price: parseInt(productData.price),
            quantity: parseInt(productData.quantity),
            supplier: productData.supplier
        }
        const proceed = window.confirm('Do you really want to create this item ? ')
        if(proceed){
            const url  = `https://fitment-furniture-store.herokuapp.com/userItems`;
            axios.post(url,{
                items: product ,
            })
        }
    }
    return (
        <div className='add-product py-5'>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'70vh'}}>
                <div className="w-100">
                    <Card className='p-4'>
                        <Card.Body>
                            <Card.Title>
                                <h2>Add A New Product</h2>
                            </Card.Title>
                            <form className='my-4' onSubmit={handleSubmit(AddProduct)}>

                                    <label htmlFor="exampleInputName" className="form-label">Email</label>
                                    <input className="form-control my-3 my-3" type="email" value={user?.email} readOnly {...register("email", {maxLength: 100})} />
                                    
                                    <label htmlFor="exampleInputProductName" className="form-label">Product Name</label>
                                    <input className="form-control my-3 my-3" type="text" placeholder="Product Name" {...register("name", {required: true, maxLength: 100})} />
                                   
                                    <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                                    <textarea className="form-control my-3 my-3" type="text" placeholder="Description" {...register("description", {required: true, maxLength: 1000})} />


                                    <label htmlFor="exampleInputImage" className="form-label">Image</label>
                                    <input className="form-control my-3 my-3" type="text" placeholder="Image / PhotoURL" {...register("img", {required: true, maxLength: 1000})} />
                                    
                                    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                                    <input className="form-control my-3 my-3" type="number" placeholder="Price" {...register("price", {required: true, maxLength: 100})} />


                                    <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                                    <input className="form-control my-3 my-3" type="number" placeholder="quantity" {...register("quantity", {required: true, maxLength: 100})} />
                                    
                                    <label htmlFor="exampleInputSupplier" className="form-label">Supplier's Name</label>
                                    <input className="form-control my-3 my-3" type="text" placeholder="Supplier's Name" value={user?.displayName} readOnly {...register("supplier", {required: true, maxLength: 100})} />

                                    <Button className='mt-3' type='submit'>Add</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default AddProducts;