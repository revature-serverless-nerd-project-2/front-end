import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function ProductsComponent(props: any) {
  const { product } = props;

  return (
      <Card className='product'>
        <Link to={`/product/${product.product_id}`}>
          <Card.Img src={`http://localhost:8080/products/image/${product.imageUrl}`} alt={product.name} />
        </Link>
        <Card.Body>
        <Link to={`/product/${product.product_id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
          <Card.Text><strong>${product.price}</strong></Card.Text>
          <Button bsPrefix='btn-cart' >Add to cart</Button>
        </Card.Body>
      </Card>
  )
}

export default ProductsComponent;