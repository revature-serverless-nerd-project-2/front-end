import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TokenType } from '../redux/token';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function ProductsComponent(props: any) {
  const { product } = props;
  const token: TokenType = useSelector((state: RootState) => state.token)
  //const username = token.username;
  const username = 'user1';
  const BASE_URL = "http://localhost:8080/newitems";

  async function addItemToCart(){
    await axios.patch(BASE_URL,
       {
        'product_id': product.product_id,
        'description': product.description,
        'imageURL': product.imageUrl,
        'name': product.name,
        'price': product.price,
        'username': username
      })
}

  return (
      <Card className='product'>
        <Link data-testid="product-link" to={`/product/${product.product_id}`}>
          <Card.Img src={`http://localhost:8080/products/image/${product.imageUrl}`} alt={product.name} />
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