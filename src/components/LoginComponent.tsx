import React, { useState } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/token';


function LoginComponent() {

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
                dispatch(setToken(token))
                alert(username);

                const payload: {iat: number, username: string, role:string} = jwtDecode(token);

                return navigate('/');
            }
        } catch (err:any) {
            alert(err.response.data.error);
        }
        
    }

  return (
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
  )
}

export default LoginComponent;