import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../redux/store'
import { setToken, TokenType } from '../redux/token'

function LogoutComponent() {
    
    const token: TokenType = useSelector((state: RootState) => state.token)
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()

    useEffect(()=>{
        localStorage.clear()
        dispatch(setToken({iat: 0, username:"", role :""}))
        setTimeout(() => {
            navigate('/')
        }, 2000)
    },[])

     
     
  return (
    <div>Logout...</div>
  )
}

export default LogoutComponent