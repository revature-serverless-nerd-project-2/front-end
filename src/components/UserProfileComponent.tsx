import React, { SyntheticEvent, useState, } from 'react'
import axios from 'axios';
import token, { TokenType } from '../redux/token';
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const api = axios.create({
    baseURL: 'http://3.134.105.20:4000/profile'
})

interface User {
  username: String
  user_name: String
  role: String
  address: String
}

const UserProfileComponent = (props: any) => {

  const token: TokenType = useSelector((state: RootState) => state.token);
  const username = token.username;
  const role = token.role;
  const BASE_URL = 'http://3.134.105.20:4000/profile'
  const [user, setUser] = React.useState<any>({})

  async function showUserProfile(params:any) {
    // axios get
    const response = await axios.get(BASE_URL, 
      {
        params: {
          username
        }
      }
    ).then((response) => {
      setUser(response)
    })

    return response
  }

  React.useEffect(() => {
    showUserProfile(user)
  })

  console.log(user)
  
  return (
    <> 
      <div key={user.username} className = 'user'>
        <h1>Your profile</h1>
        <h3>{user.name}</h3>
        <h4>{username}</h4>
        <p>{user.address} - {role}</p>
      </div>
    </>
  )
}

export default UserProfileComponent
