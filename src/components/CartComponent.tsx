import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TokenType } from '../redux/token';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { CartID, setCartID } from '../redux/cartID';
import { v4 as uuidv4 } from 'uuid';

export default function CartComponent(){
    const token: TokenType = useSelector((state: RootState) => state.token);
    const username = token.username;
    const BASE_URL = "http://localhost:8080/carts";
    const cartID: string = useSelector((state: RootState) => state.cartID.id);
    const dispatch: AppDispatch = useDispatch();
    const grandTotal: number = useSelector((state: RootState) => state.total.total)
    const [userCart, setUserCart] = useState<any[]>([]);
    const [cartState, setCartState] = useState(true);
    const [cartName, setCartName] = useState<string>();
    const [total, setTotal] = useState<number>(grandTotal);
    let blankArr: any[] = [];
    

    const axiosGetCart = async () => {
        let user;
        if(!username){
            if(cartID){
                user = cartID;
            } else {
                user = username;
            }
        }
        const response = await axios.get(BASE_URL, {params: {username: user}}).then((response) => {
            if(response.data === 'No Items in Cart'){
                setUserCart([blankArr]);
                setCartState(true);
            } else{
                setUserCart([...userCart, ...response.data]);
                setCartState(false);
            }
        });
    };

    useEffect(() => {
        axiosGetCart();
        setTotal(grandTotal);
    }, []);

    const mappedCart = cartState ? <p>Shop to Add Items to Cart</p> : userCart.map((product, index) => {
        return(
            <div key={index}>
                <h4>Device: {product.name}</h4>
                <img src={`http://localhost:8080/products/image/${product.imageURL}`} alt={product.name} style={{maxWidth:'100%'}}/>
                <p>{product.description}</p>
                <h6>Price: ${product.price}</h6>
            </div>
        )
    })

    return (
        <div>
            <h1>Cart</h1>
            {mappedCart}
            <h2>Total Amount: ${total}</h2>
        </div>
    );
}

