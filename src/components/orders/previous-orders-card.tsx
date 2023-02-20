import React, { useState } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './previous-orders';

function PreviousOrdersCard(props: any) {
  const { order } = props;
  let date = Date();
  return (
        <>
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <li className='cards__item'>
        <Link to={`/product/${order.product.key.item.product_id}`}>
            <img className='cards__item__link' src={`http://3.134.105.20:4000/products/image/${order.product.key.item.imageUrl}`} alt={order.product.key.item.name} style={{maxWidth:'100%'}}/>
        </Link>
        <div className='cards__item__info'>
            <h1 className='cards__item__text'>{order.product.key.item.name}</h1>
            <h2 className='cards__item__text'>${order.product.key.item.price}</h2> 
            <p>Ordered: {date}</p>
        </div>
        </li>
        </ul>
        </div>
        </div>
        </div></>
        )
}

export default PreviousOrdersCard;