import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token"
import cartIDReducer from './cartID'
import totalReducer from './total'


const store = configureStore({
    reducer: {
        token: tokenReducer,
        cartID: cartIDReducer,
        total: totalReducer

    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;