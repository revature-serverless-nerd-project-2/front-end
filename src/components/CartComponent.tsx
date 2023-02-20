import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TokenType } from '../redux/token';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { CartID, setCartID } from '../redux/cartID';
// import { v4 as uuidv4 } from 'uuid';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

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
                <Card className='product'>
                <Link data-testid="product-link" to={`/product/${product.product_id}`}>
                    <Card.Img src={`http://localhost:8080/products/image/${product.imageURL}`} alt={product.name} />
                </Link>
                <Card.Body>
                    <Link data-testid="product-link2" to={`/product/${product.product_id}`}>
                        <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text><strong>Description:</strong> {product.description}</Card.Text>
                    <Card.Text><strong>${product.price}</strong></Card.Text>
                </Card.Body>
            </Card>
           
            </div>
        )
    })
    const navigate = useNavigate();

    function onNavigate () {
        
        return navigate('/checkout');
    }
    return (
        <div>            
            <h1>Cart</h1>
            {mappedCart}
            <h2>Total Amount: ${total}</h2>
            <Button bsPrefix='btn-cart' onClick={onNavigate}>Proceed to checkout</Button>
        </div>
    );
}

