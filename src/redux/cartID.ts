import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartID {
    id: string
}

export const cartIDSlice = createSlice({
    name: 'cartID',
    initialState: {id: ''} as CartID,
    reducers: {
        setCartID(state: {id: string}, action: PayloadAction<CartID>){
            state.id = action.payload.id;
        }
    }
})

export const {setCartID} = cartIDSlice.actions;

export default cartIDSlice.reducer;