import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppDispatch, RootState } from '../redux/store';
import { TokenType } from '../redux/token';
import { CartID, setCartID } from '../redux/cartID';
import { useSelector, useDispatch } from 'react-redux';
import { addToTotal } from '../redux/total';

function ProductsComponent(props: any) {
  const { product } = props;
  const token: TokenType = useSelector((state: RootState) => state.token)
  const cartID: string = useSelector((state: RootState) => state.cartID.id);
  const username = token.username;
  const BASE_URL = "http://3.134.105.20:4000/newitems";
  const dispatch: AppDispatch = useDispatch();

  const [cartName, setCartName] = useState(cartID);

  async function addItemToCart(){
    alert('Item Added To Cart!')
    let user;
    if(username !== ''){
      user = username;
    } else if(!cartID){
      user = username;
    } else {
      user = cartID;
    };
    const response = await axios.patch(BASE_URL,
       {
        'product_id': product.product_id,
        'description': product.description,
        'imageURL': product.imageUrl,
        'name': product.name,
        'price': product.price,
        'username': user
      })

      if(!cartID){
        const guestCartID = response.data;
        generateGuestAlias(guestCartID);
      }

      dispatch(addToTotal({total: product.price}));
  }

  function generateGuestAlias(id: string){
    dispatch(setCartID({id}))
    setCartName(id);
  }
  
  return (
      <Card className='product'>
        <Link data-testid="product-link" to={`/product/${product.product_id}`}>
          <Card.Img src={`http://3.134.105.20:4000/products/image/${product.imageUrl}`} alt={product.name} />
        </Link>
        <Card.Body>
        <Link data-testid="product-link2" to={`/product/${product.product_id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
          <Card.Text><strong>${product.price}</strong></Card.Text>
          {
            product.quantity > 0 ? <Button bsPrefix='btn-cart' onClick={addItemToCart}>Add to cart</Button> :
            <Button variant='secondary' size='sm' disabled >Add to cart</Button>                                  
          }
        </Card.Body>
      </Card>
  )
}

export default ProductsComponent;