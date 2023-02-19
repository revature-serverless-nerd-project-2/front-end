import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TokenType } from '../redux/token';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export default function CartComponent(){
    const token: TokenType = useSelector((state: RootState) => state.token)
    //const username = token.username;
    const username = 'user1';
    const BASE_URL = "http://localhost:8080/carts";

    const [userCart, setUserCart] = useState<any[]>([]);
    const [empty, setEmptyState] = useState<boolean>(true);

    const changeEmptyState = (newState: boolean) => {
        setEmptyState(newState)
    }

    const axiosGetCart = async () => {
        const response = await axios.get(BASE_URL, {params: {username: username}}).then((response) => {
            //setUserCart([...userCart, response.data]);
            setUserCart(response.data);
            //console.log(response.data);
            /*if(userCart.length > 0){
                changeEmptyState(false);
            } else {
                changeEmptyState(true);
                console.log(userCart);
            }*/

            console.log(empty);
        });
    };

    useEffect(() => {
        axiosGetCart();
    }, []);

    const mappedCart = userCart.map((product, index) => {
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
            {/*empty ? <p>Cart Is Empty</p> :*/ mappedCart}
        </div>
    );
}



