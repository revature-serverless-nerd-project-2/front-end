import React, { useState } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function PreviousOrdersCard(props: any) {
  const { order } = props;
  let date = Date();
  return (
    <div>
    <Row>
        <p>{date}</p>
        <Col md={6}>
            <img src={`http://3.134.105.20:4000/products/image/${order.product.key.item.imageUrl}`} alt={order.product.key.item.name} style={{maxWidth:'100%'}}/>
        </Col>
        <Col md={4} className='mb-5'>
            <ListGroup>
                <ListGroup.Item><h1>{order.product.key.item.name}</h1></ListGroup.Item>
                <ListGroup.Item><h2>${order.product.key.item.price}</h2></ListGroup.Item>
            </ListGroup>
        </Col>                   
    </Row>
</div>
  )
}

export default PreviousOrdersCard;