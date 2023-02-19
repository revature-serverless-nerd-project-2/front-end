import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function PreviousOrdersCard(props: any) {
  const { order } = props;

  return (
      <Card className='product'>
        <Link data-testid="product-link" to={`/product/${order.products.key.product_id}`}>
          <Card.Img src={`http://localhost:8080/products/image/${order.products.key.imageUrl}`} alt={order.products.key.name} />
        </Link>
        <Card.Body>
        <Link data-testid="product-link2" to={`/product/${order.products.key.product_id}`}>
          <Card.Title>{order.products.key.name}</Card.Title>
        </Link>
          <Card.Text><strong>${order.products.key.price}</strong></Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PreviousOrdersCard;