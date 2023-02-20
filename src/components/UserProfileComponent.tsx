import React, { SyntheticEvent, useState, } from 'react'
import axios from 'axios';
import token, { TokenType } from '../redux/token';
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux';

const api = axios.create({
    baseURL: 'http://localhost:3000/profile'
})

const UserProfileComponent = (props: any) => {

    const token = localStorage.getItem('token')

    const [isShow, setShow] = React.useState(true)
    const { user } = props
    
    const editButtonHandler = () => {
        setShow(!isShow)
    }

    const name = ''
    const username = ''
    const role = ''
    const userAddress = ''
  return (
    <div className='user'>
      <h1>{"name"}</h1>
      <h3> {"username"} </h3>
      <br />
      <div> {"role"} - {"address"} </div>
      <br />
      <button onClick={editButtonHandler}>Change your name</button>

      {isShow ? <form action="">
        <input type="text" name='name' />
      </form> : null}

      <button onClick={editButtonHandler}>Change address</button>
      {isShow ? <form action="">
        <input type="text" />
      </form> : null }
      
      <link rel="stylesheet" href="" />
    </div>
  )
}

export default UserProfileComponent
