import React, { useState } from "react";
import axios from 'axios';
import './register.css';

function Register() {

    const[error, setError] = useState(null);

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');

    async function registerSubmit() {
            const response = await axios.post('http://3.134.105.20:4000/register', {"username": username, "password": password, "confirmPassword": confirmPassword, 
            "name": name, "address": address });

        if (response.status === 201) {
            alert('Successfully Registered!');
        } else if (response.status === 411) {
            alert('Username and Password must be at least 6 characters');
        } else if (response.status === 409) {
            alert('Username has already been taken');
        } else if (response.status === 412) {
            alert('Passwords do not match');
        } else if (response.status === 400) {
            alert('No Field can be left empty');
        } else {
            alert(response.data);
        }}

    return (
    <>
    <main className="background">
    <div className="registration">
        <h3>Create an Account</h3>
        <form title="register" onSubmit={(event) => {event.preventDefault() }}>
            <p><input onChange={(e)=> { setUsername((e.target.value)) }} value={username} type="text" name="username" placeholder="Username"/></p>
            <p><input onChange={(e)=> { setPassword((e.target.value)) }} value={password} type="text" name="password" placeholder="Password"/></p>
            <p><input onChange={(e)=> { setConfirmPassword((e.target.value)) }} value={confirmPassword} type="text" name="confirmPassword" placeholder="Re-enter Password"/></p>
            <p><input onChange={(e)=> { setName((e.target.value)) }} value={name} type="text" name="name" placeholder="Name"/></p>
            <p><input onChange={(e)=> { setAddress((e.target.value)) }} value={address} type="text" name="address" placeholder="Address"/></p>
            <button className="registerbtn" onClick={registerSubmit}>Create Account</button>
        </form>
    </div></main>
    </>
    
)};

export default Register;