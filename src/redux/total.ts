import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cost {
    total: number
}

export const totalSlice = createSlice({
    name: 'total',
    initialState: {total: 0} as Cost,
    reducers: {
        addToTotal(state: {total: number}, action: PayloadAction<Cost>){
            state.total += action.payload.total;
        }
    }
})

export const {addToTotal} = totalSlice.actions;
export default totalSlice.reducer;