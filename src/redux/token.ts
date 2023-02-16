import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

export interface TokenType {
    iat: number, 
    username: string, 
    role: string
}

export const tokenSlice = createSlice({
    name: "token",
    initialState: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token') as string) as TokenType : {iat: 0, username: "", role: ""},
    reducers:{
        setToken: (state: TokenType, action: PayloadAction<TokenType>) => {
            return action.payload;
        },
        removeToken: (state: TokenType, action:PayloadAction<TokenType>) =>{
            return {iat: 0, username: "", role: ""};
        }
    }
})

export const {setToken, removeToken} = tokenSlice.actions;

export default tokenSlice.reducer;
