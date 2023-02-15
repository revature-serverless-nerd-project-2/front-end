import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: "token",
    initialState: localStorage.getItem('token') as string,
    reducers:{
        setToken: (state: string, action: PayloadAction<string>) => {
            return action.payload;
        },
        removeToken: (state: string, action:PayloadAction<string>) =>{
            return "";
        }
    }
})

export const {setToken, removeToken} = tokenSlice.actions;

export default tokenSlice.reducer;
