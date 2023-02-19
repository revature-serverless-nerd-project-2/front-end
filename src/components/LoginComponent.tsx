import React, { useState } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, TokenType } from '../redux/token';
import { setCartID } from '../redux/cartID';


function LoginComponent() {

    const token: TokenType = useSelector((state: RootState) => state.token)
    const cartID: string = useSelector((state: RootState) => state.cartID.id);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch: AppDispatch = useDispatch()

    const navigate = useNavigate();

    function getUsernameInput(event: React.FormEvent<HTMLInputElement>) {
        setUsername(event.currentTarget.value);
    }

    function getPasswordInput(event: React.FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }


    async function login() {
        try {
            const response = await axios.post('http://localhost:8080/login', {'username':username, 'password':password});
            if (response.status === 200) {

                const token = response.data.token;
                const username = response.data.username;
                localStorage.setItem('token', token);
                dispatch(setToken(jwt_decode(token)))
                alert(username);
                dispatch(setCartID({id: username}))

                return navigate('/');
            }
        } catch (err:any) {
            alert(err.response.data.error);
        }
        
    }

  return (
    <>
        {
        token.role ? <Navigate to="/"/> :
        <Container className='login-container'>
                <h1 className='my-4'>Sign In</h1>
                <Form onSubmit={(e) => {e.preventDefault()}} >
                        <Form.Group className='mb-4' controlId='username'>
                            <Form.Label >Username</Form.Label>
                            <Form.Control className='w-50' type='text' placeholder='Username' value={username} onChange={(event) => getUsernameInput(event as any)} required/>  
                        </Form.Group> 
                        <Form.Group className='mb-4' controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='w-50' type='password' placeholder='Password' value={password} onChange={(event) => getPasswordInput(event as any)}required/>  
                        </Form.Group>
                    <Button variant='primary' type='submit' onClick={login}>Sign In</Button>
                    <div className='mb-4'>
                        Don't have an account?{' '} 
                        <Link to={'/'}>Register</Link>
                    </div>
                </Form>
        </Container>
        }
    </>
  )
}

export default LoginComponent;