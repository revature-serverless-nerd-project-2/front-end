import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TokenType } from '../redux/token';
import UnauthorizedComponent from './UnauthorizedComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProductComponent() {

    const token: TokenType = useSelector((state: RootState) => state.token)
    
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');

    const getNameInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setName(event.currentTarget.value);
    }
    const getDescInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setDesc(event.currentTarget.value);
    }
    const getPriceInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setPrice(Number(event.currentTarget.value));
    }
    const getQuantityInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setQuantity(Number(event.currentTarget.value));
    }
    const getImageInput = (event: any) =>{
        setImage(event.target.files[0]);
    }



    const submit = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('price', String(price));
        formData.append('quantity', String(quantity));

        try {
            const response = await axios.post('http://localhost:8080/products', formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            if (response.status === 201){
                alert("Product Created")
                return navigate('/');
            }
            
        } catch (err: any) {
             alert(err.response.data.error);
        }   
    }

  return (
    <>
        {
            token.role !== 'Admin' ? <UnauthorizedComponent/> :
        <Container>
            <h1 className='my-4'>Add a product</h1>
            <Form onSubmit={(e) => {e.preventDefault()}} >
                        <Form.Group className='mb-4' controlId='formFile'>
                            <Form.Label >Image</Form.Label>
                            <Form.Control className='w-50' type='file'  onChange={(event) => getImageInput(event as any)} required/>  
                        </Form.Group> 
                        <Form.Group className='mb-4' controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Name' value={name} onChange={(event) => getNameInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='desc'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Description' value={desc} onChange={(event) => getDescInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control className='w-50' type='number' placeholder='Price' value={price} onChange={(event) => getPriceInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='quantity'>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control className='w-50' type='number' placeholder='Quantity' value={quantity} onChange={(event) => getQuantityInput(event as any)} required/>  
                        </Form.Group>
                    <Button variant='primary' type='submit' onClick={submit}>Add product</Button>
                    
                </Form>
        
        </Container>
        }
    </>
  )
}

export default AddProductComponent