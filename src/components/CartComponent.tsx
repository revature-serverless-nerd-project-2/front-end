import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TokenType } from '../redux/token';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export default function CartComponent(){
    const token: TokenType = useSelector((state: RootState) => state.token)
    const username = token.username;
    const BASE_URL = "http://localhost:8080/carts";

    const [userCart, setUserCart] = useState<any[]>([]);
    const [cartState, setCartState] = useState(true);
    let blankArr: any[] = [];

    const axiosGetCart = async () => {
        const response = await axios.get(BASE_URL, {params: {username: username}}).then((response) => {
            if(response.data == 'No Items in Cart'){
                setUserCart([blankArr]);
                setCartState(true);
            } else{
                setUserCart(response.data);
                setCartState(false);
            }
        });
    };

    useEffect(() => {
        axiosGetCart();
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
        </div>
    );
}



