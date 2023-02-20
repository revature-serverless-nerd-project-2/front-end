import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { TokenType } from '../redux/token';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';


function CheckoutComponent () {
   

    const token: TokenType = useSelector((state: RootState) => state.token)
    
    const [Firstname, setFirstName] = useState('');
    const [Lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Address2, setAddress2] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Zip, setZip] = useState(0);

    const navigate = useNavigate();

    const getFirstNameInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setFirstName(event.currentTarget.value);
    }
    const getLastNameInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setLastName(event.currentTarget.value);
    }
    const getUsernameInput = (event: React.FormEvent<HTMLInputElement>) =>{
      setUsername(event.currentTarget.value);
    }
    const getEmailInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setEmail(event.currentTarget.value);
    }
    const getAddressInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setAddress(event.currentTarget.value);
    }
    const getAddress2Input = (event: React.FormEvent<HTMLInputElement>) =>{
        setAddress2(event.currentTarget.value);
    }
    const getCityInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setCity(event.currentTarget.value);
    }
    const getStateInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setState(event.currentTarget.value);
    }
    const getZipInput = (event: React.FormEvent<HTMLInputElement>) =>{
        setZip(Number(event.currentTarget.value));
    }


    // async function showCart () {
    //   const response = await axios.get('http://localhost:8080/cart', {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}` 
    //     }
    //   })
    //   setCart (response.data);
    // }

    
    
    async function checkout() {
        const response = await axios.post('http://3.134.105.20:4000/orders', {
            'Firstname':Firstname, 
            'Lastname':Lastname, 
            'username' :username,
            'Email' :Email,
            'Address' :Address,
            'City' :City,
            'State' :State,
            'Zip': Zip,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Sending a registered user's token to the backend
                // So the user is able to checkout with items in the cart
            }
        });
        if(response.status === 200){
            alert('Your Order is ready!');
            console.log('Success');
        }
        return navigate('/complete');
    }

    

   return (
    
<>

            <h1>Checkout Form</h1>

            <Container>
            <h2 className='my-4'>Shipping Information</h2>
            <Form onSubmit={(e) => {e.preventDefault()}} >
            <Row className="mb-4">
                        <Form.Group as={Col} className='mb-4' controlId='Firstname'>
                            <Form.Label >Firstname</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Firstname' value={Firstname}  onChange={(event) => getFirstNameInput(event as any)} required/>  
                        </Form.Group> 
                        <Form.Group as={Col} className='mb-4' controlId='Lastname'>
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Lastname' value={Lastname} onChange={(event) => getLastNameInput(event as any)} required/>  
                        </Form.Group>
                        </Row>
                        <Form.Group as={Col} className='mb-4' controlId='username'>
                            <Form.Label>username</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='username' value={username} onChange={(event) => getUsernameInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='Email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Enter email' value={Email} onChange={(event) => getEmailInput(event as any)} required/>  
                        </Form.Group>
                        <Row className="mb-4">
                        <Form.Group as={Col} className='mb-4' controlId='Address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='1234 Main St' value={Address} onChange={(event) => getAddressInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group as={Col} className='mb-4' controlId='Address2'>
                            <Form.Label>Address2</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Apartment, studio, or floor' value={Address2} onChange={(event) => getAddress2Input(event as any)}/>  
                        </Form.Group>
                        </Row>
                        <Row className="mb-4">
                        <Form.Group as={Col} className='mb-3' controlId='City'>
                            <Form.Label>City</Form.Label>
                            <Form.Control className='w-50' type='text' value={City} onChange={(event) => getCityInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group as={Col} className='mb-4' controlId='State'>
                            <Form.Label>State</Form.Label>
                            <Form.Control className='w-50' type='text' value={State} onChange={(event) => getStateInput(event as any)} required/>  
                        </Form.Group>
                        <Form.Group as={Col} className='mb-4' controlId='Zip'>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control className='w-50' type='number' value={Zip} onChange={(event) => getZipInput(event as any)} required/>  
                        </Form.Group>
                        </Row>
                        <Form.Group className="mb-4" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Shipping address is the same as billing address" />
                        </Form.Group>
                        <Form.Group className="mb-4" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Save this information for next time" />
                        </Form.Group>
                    <Button variant='primary' bsPrefix='btn-cart' type='submit' onClick={checkout}>Place Order</Button>
                    
                </Form>
                </Container>
        
        
  
   
</>

)

}


export default CheckoutComponent;